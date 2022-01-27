const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = graphql
const data = require('../assets/dataset.json').drugs;


const DrugType = new GraphQLObjectType({
    name: 'Drug',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        released: { type: GraphQLString },
        description: { type: GraphQLString },
        diseases: { type: new GraphQLList(GraphQLString)}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Drug: {
            type: new GraphQLList(DrugType),
            args: { id: { type: GraphQLString }, name: { type: GraphQLString }, diseaseName: { type: GraphQLString } },
            resolve(parent, args) {
                if (args.id) {
                    return data?.filter(drug => drug?.id === args.id)
                }
                if (args.name) {
                    return data.filter(i => i.name.toLowerCase().includes(args.name?.toLowerCase()))
                }
                if (args.diseaseName) {
                    return data.filter(i => i.diseases.join("").includes(args.diseaseName.toLowerCase()))
                }
            }
        }
    }
})


module.exports = {
    schema: new GraphQLSchema({
        query: RootQuery
    })
}