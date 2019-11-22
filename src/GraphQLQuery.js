import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql } from "apollo-boost";


class GraphQLService {

    executeQuery(queryclient, querystring) {
        queryclient.query({
            query: querystring
        })
        .then(result => console.log(result));
    }
};

export default GraphQLService
