from flask import Flask, render_template
import os
print("current folder:", os.getcwd())
app= Flask(__name__)
@app.route("/")
def home():
    return render_template("index.html")
if __name__=="__main__":
    app.run(debug=True)
