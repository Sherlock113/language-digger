from flask import Flask, render_template, redirect, url_for, request
from datetime import datetime
import frontmatter
import markdown
import os
from flask_bootstrap import Bootstrap5
from pathlib import Path

POSTS_DIR = 'blog'
BOOK_DIR = 'content-book'

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('FLASK_KEY')
bootstrap = Bootstrap5(app)


def get_sidebar_structure():
    """Load markdown files and dynamically created a sidebar."""
    structure = []

    for chapter in os.listdir(BOOK_DIR):
        chapter_path = os.path.join(BOOK_DIR, chapter)
        if os.path.isdir(chapter_path):
            pages = []
            min_id = float('inf')  # Track minimum ID in chapter

            # Get all markdown files in chapter directory
            for file in os.listdir(chapter_path):
                if file.endswith('.md'):
                    file_path = os.path.join(chapter_path, file)
                    # Parse frontmatter
                    post = frontmatter.load(file_path)
                    try:
                        page_id = int(post.get('id', 999))
                        min_id = min(min_id, page_id)  # Update minimum ID
                    except (ValueError, TypeError):
                        page_id = 999

                    pages.append({
                        'title': post.get('title', file[:-3].replace('-', ' ').title()),
                        'url': f'/book/{chapter}/{file[:-3]}',
                        'id': page_id
                    })

            # Sort pages within chapter by id
            pages.sort(key=lambda x: x['id'])

            structure.append({
                'title': chapter.replace('-', ' ').title(),
                'id': f'{chapter.lower()}-collapse',
                'pages': pages,
                'min_id': min_id  # Store minimum ID for chapter sorting
            })

    # Sort chapters based on minimum ID in each chapter
    structure.sort(key=lambda x: x['min_id'])

    return structure


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/book")
def show_book():

    return render_template('book.html', structure=get_sidebar_structure())


@app.route("/book/<chapter>/<page>")
def show_book_page(chapter, page):
    file_path = os.path.join(BOOK_DIR, chapter, f"{page}.md")

    if not os.path.exists(file_path):
        return "Page not found", 404

    # Parse frontmatter and content
    post = frontmatter.load(file_path)
    content = markdown.markdown(post.content,
                                extensions=['fenced_code', 'tables', 'codehilite', 'markdown.extensions.nl2br',
                                            'markdown.extensions.sane_lists',
                                            'md_in_html',
                                            'markdown.extensions.extra'])

    # Get structure for sidebar
    structure = []

    for ch in os.listdir(BOOK_DIR):
        ch_path = os.path.join(BOOK_DIR, ch)
        if os.path.isdir(ch_path):
            pages = []
            min_id = float('inf')

            for file in os.listdir(ch_path):
                if file.endswith('.md'):
                    file_path = os.path.join(ch_path, file)
                    page_data = frontmatter.load(file_path)
                    try:
                        page_id = int(page_data.get('id', 999))
                        min_id = min(min_id, page_id)
                    except (ValueError, TypeError):
                        page_id = 999

                    pages.append({
                        'title': page_data.get('title', file[:-3].replace('-', ' ').title()),
                        'url': f'/book/{ch}/{file[:-3]}',
                        'id': page_id,
                        'active': ch == chapter and file[:-3] == page
                    })

            # Sort pages within chapter by id
            pages.sort(key=lambda x: x['id'])

            structure.append({
                'title': ch.replace('-', ' ').title(),
                'id': f'{ch.lower()}-collapse',
                'expanded': ch == chapter,
                'pages': pages,
                'min_id': min_id
            })

    # Sort chapters based on minimum ID
    structure.sort(key=lambda x: x['min_id'])

    return render_template('page.html',
                           content=content,
                           structure=structure,
                           current_chapter=chapter,
                           page_title=post.get('title'))


# General blog page
@app.route('/blog')
def show_blog():
    posts = []
    for filename in os.listdir(POSTS_DIR):
        if filename.endswith('.md'):
            post_path = os.path.join(POSTS_DIR, filename)
            # Parse frontmatter
            post = frontmatter.load(post_path)

            posts.append({
                'title': post.get('title', 'Untitled'),
                'description': post.get('description', ''),
                'date': post.get('date', 'Unknown Date'),
                'img_url': post.get('img_url', '/static/assets/images/default.jpg'),
                'url': f"/blog/{filename[:-3]}"  # Remove .md extension
            })

    # Sort posts by date, newest first
    posts.sort(key=lambda x: datetime.strptime(x['date'], "%B %d, %Y"), reverse=True)

    return render_template('blog.html', posts=posts)


# Individual blog page
@app.route('/blog/<post_name>')
def show_post(post_name):
    # Path to the markdown file
    post_path = os.path.join(POSTS_DIR, f"{post_name}.md")

    # Check if the markdown file exists
    if not os.path.exists(post_path):
        return f"Post {post_name} not found.", 404

    # Read and parse the markdown file with frontmatter
    post = frontmatter.load(post_path)

    # Metadata for the post (e.g., from a file or a dict)
    post_content = post.content

    # Configure Markdown with updated extension settings
    md = markdown.Markdown(extensions=[
        'fenced_code',
        'tables',
        'codehilite',
        'markdown.extensions.nl2br',
        'markdown.extensions.sane_lists',
        'md_in_html',
        'markdown.extensions.extra'
    ], extension_configs={
        'codehilite': {
            'css_class': 'highlight',
            'linenums': False
        }
    })

    post_metadata = {
        'title': post.get('title', 'Untitled'),
        'description': post.get('description', ''),
        'date': post.get('date', 'Unknown Date'),
        'img_url': post.get('img_url', ''),
        'body': md.convert(post_content)
    }

    return render_template("post.html", post=post_metadata)


@app.route("/gallery")
def show_gallery():
    return render_template("gallery.html")


@app.route("/about")
def show_about():
    return render_template("about.html")


if __name__ == '__main__':
    app.run(debug=False)
