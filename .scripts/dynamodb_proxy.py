from flask import Flask, send_file
import urllib.request
import os

app = Flask(__name__)


@app.get("/<path:path>")
def dynamodb_proxy(path: str):
    """
    add the following line to the /etc/hosts file
    127.0.0.1 s3-us-west-2.amazonaws.com
    """

    output_directory = ".tmp"
    filename = "dynamodb_local_latest.tar.gz"
    url = f"https://s3.us-west-2.amazonaws.com/dynamodb-local/{filename}"

    if not os.path.exists(output_directory):
        os.mkdir(output_directory)

    path = f"{output_directory}/{filename}"
    urllib.request.urlretrieve(url, path)

    return send_file(f"../{path}", as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True, port=80)
