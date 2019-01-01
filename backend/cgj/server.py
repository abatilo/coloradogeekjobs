import os

from cgj import Schema

from sanic import Sanic
from sanic.log import logger as log

from sanic_cors import CORS


from sanic_graphql import GraphQLView


app = Sanic(__name__)
CORS(app, automatic_options=True)
app.add_route(GraphQLView.as_view(schema=Schema, graphiql=True), '/graphql')

app.config.from_pyfile('config.py')

DEV_CONFIG_PATH = 'instance/config.py'
if os.path.exists(DEV_CONFIG_PATH):
    log.info('Loaded local config')
    app.config.from_pyfile(DEV_CONFIG_PATH)
else:
    log.info('Loaded production config only')
