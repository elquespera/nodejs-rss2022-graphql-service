import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const schema_url = './src/modules/**/schemas/*.graphql';
//const schema_url = './src/modules/genres/schemas/genre.graphql';
 
const loadSchemas = async () => {
    const schema = await loadSchema(schema_url, {
        loaders: [new GraphQLFileLoader()]
    });

    console.log(schema);

    return schema;
} 

export default loadSchemas;



 