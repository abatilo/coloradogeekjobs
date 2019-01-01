from cgj.definitions import Post, post_object_definition

from graphql.type.definition import (
    GraphQLArgument,
    GraphQLField,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
)
from graphql.type.scalars import GraphQLInt
from graphql.type.schema import GraphQLSchema

posts = [
    Post(id=0,
         jobTitle='Software Engineer',
         jobType='full',
         jobDescription='Do code things',
         companyName='Conga',
         companyWebsite='https://getconga.com',
         companyDescription='We have free food',
         how='Email me',
         email='asdf@asdf',
         date='2019-01-01T05:07:42.614Z'),
    Post(id=1,
         jobTitle='Senior Software Engineer',
         jobType='full',
         jobDescription='Do code things',
         companyName='Conga',
         companyWebsite='https://getconga.com',
         companyDescription='We have free food',
         how='Email me',
         email='asdf@asdf',
         date='2019-01-01T05:07:42.614Z'),
    Post(id=2,
         jobTitle='Machine Learning Engineer',
         jobType='full',
         jobDescription='Do code things',
         companyName='Conga',
         companyWebsite='https://getconga.com',
         companyDescription='We have free food',
         how='Email me',
         email='asdf@asdf',
         date='2019-01-01T05:07:42.614Z'),
    ]


def all_posts():
    return posts


def get_post(identifier):
    return [post for post in posts if post.id == identifier][0]


QueryRootType = GraphQLObjectType(
    name='QueryRoot',
    fields={
        'allJobs': GraphQLField(
            GraphQLNonNull(GraphQLList(post_object_definition)),
            resolver=lambda parent, info, **args: all_posts()
        ),
        'job': GraphQLField(
            GraphQLNonNull(post_object_definition),
            resolver=lambda parent, info, **args: get_post(args.get('id')),
            args={
                'id': GraphQLArgument(
                    description='The post id to view',
                    type=GraphQLInt
                )
            },
        ),
    }
)

Schema = GraphQLSchema(QueryRootType)

# from graphql import (
#     GraphQLArgument,
#     GraphQLField,
#     GraphQLNonNull,
#     GraphQLObjectType,
#     GraphQLSchema,
#     GraphQLString,
# )

# from .object_definitions import contract_object_definition
# from .resolvers import analysis_resolver

# schema = GraphQLSchema(
#     query=GraphQLObjectType(
#         name='Query',
#         fields={
#             'contract': GraphQLField(
#                 contract_object_definition,
#                 args={
#                     'contractType': GraphQLArgument(
#                         description='The contract type, so that we know which blueprint to use',
#                         type=GraphQLNonNull(GraphQLString)
#                     ),
#                     'documentData': GraphQLArgument(
#                         description='The docx document to be analyzed, in base64 encoding',
#                         type=GraphQLNonNull(GraphQLString)
#                     )
#                 },
#                 resolver=lambda root, info, **args: analysis_resolver(args)
#             ),
#         }
#     ),
# )

