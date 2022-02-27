const gql = require('graphql-tag');

module.exports = gql`

fragment WebsitePremiumPartnersFragment on Content {
  id
  type
  shortName
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
}

`;
