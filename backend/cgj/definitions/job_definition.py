from collections import namedtuple

from graphql.type.definition import (
    GraphQLField,
    GraphQLNonNull,
    GraphQLObjectType,
)
from graphql.type.scalars import (
    GraphQLInt,
    GraphQLString,
)

"""
GraphQL schema definition for a job posting

type Post {
    id: Number!
    jobTitle: String!
    jobType: String!
    jobDescription: String!
    companyName: String!
    companyWebsite: String!
    companyDescription: String!
    how: String!
    email: String!
    date: String!
}
"""

Post = namedtuple('Post', ('id jobTitle jobType jobDescription companyName '
                           'companyWebsite companyDescription how email date'))
post_object_definition = GraphQLObjectType(
    'Post',
    description=(
        """
A single job post
        """
    ),
    fields=lambda: {
        'id': GraphQLField(
            GraphQLNonNull(GraphQLInt),
            description='A unique identifier for this job post'
        ),
        'jobTitle': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description='The title for this job'
        ),
        'jobType': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'jobDescription': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'companyName': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'companyWebsite': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'companyDescription': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'how': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'email': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
        'date': GraphQLField(
            GraphQLNonNull(GraphQLString),
            description=''
        ),
    }
)
