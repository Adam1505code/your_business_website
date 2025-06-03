from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "change_this_secret"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/departments")
def departments():
    return render_template("departments.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/careers")
def careers():
    return render_template("careers.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        # Email or database logic goes here
        flash("Thank you for contacting McEneaney Engineering! We will respond shortly.", "success")
        return redirect(url_for('contact'))
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)
