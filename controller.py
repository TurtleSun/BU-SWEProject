from __future__ import annotations

import flask
#from model import ConcentrationModel
#from flask_cors import CORS


app = flask.Flask(__name__)
#CORS(app)

#model = ConcentrationModel()

@app.route('/health', methods=['GET'])
def health() -> flask.Response:
    """Health check.

    """
    data = {
        'message': 'OK'
    }
    return flask.make_response(data, 200)