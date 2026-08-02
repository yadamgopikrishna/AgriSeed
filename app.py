from flask import Flask, render_template,request,session
app= Flask(__name__)
@app.route("/")
def home():
    return render_template("home.html")
@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        fullname = request.form["fullname"]
        phone = request.form["phone"]
        email = request.form["email"].lower()
        village = request.form["village"]
        district = request.form["district"]
        state = request.form["state"]
        pincode = request.form["pincode"] 
    return render_template("register.html")
if __name__=="__main__":
    app.run(debug=True)
