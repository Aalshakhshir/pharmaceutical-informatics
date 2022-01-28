export const DrugsQuery = (searchTerm) => {
return gql`
  query Drugs {
    Drugs(name: ${searchTerm}}) {
      name
      id,
      description,
      diseases,
    }
  }
`}