const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList } = graphql
const data = require('../assets/dataset.json').drugs;


const DrugType = new GraphQLObjectType({
    name: 'Drug',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        released: { type: GraphQLString },
        description: { type: GraphQLString },
        diseases: { type: new GraphQLList(GraphQLString) }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Drugs: {
            type: new GraphQLList(DrugType),
            args: {  name: { type: GraphQLString }},
            resolve(parent, args) {
                // if (args.id) {
                //     return data?.filter(drug => drug?.id === args.id)
                // }
                if (args.name) {
                    return data.filter(i => i.name.toLowerCase().includes(args.name?.toLowerCase()) || i.diseases.join("").includes(args.name.toLowerCase()) || i?.description?.toLowerCase().includes(args.name.toLowerCase()))
                }
                // if (args.diseaseName) {
                //     return data.filter(i => i.diseases.join("").includes(args.diseaseName.toLowerCase()))
                // }
            }
        },
        Diseases: {
            type: GraphQLString,
            args: { name: { type: GraphQLString }},
            resolve(parent, args) {
                if (args.name) {
                    return data.map(drug => drug.diseases).filter(i => i.join("").includes(args.name.toLowerCase())).join(", ")
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