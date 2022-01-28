import { gql } from '@apollo/client'

export const DrugsQuery = (searchTerm) => {
return gql`
{
  Drugs(name: "${searchTerm}") {
    name,
    diseases,
    id
    
  }
}
`}