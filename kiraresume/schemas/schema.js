import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import additional from './resumeAdditional'
import awards from './resumeAwards'
import blockContent from './blockContent'
import education from './resumeEducation'
import experience from './resumeExperience'
import header from './resumeHeader'
import headers from './resumeHeaders'
import language from './resumeLanguage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([additional, awards, blockContent, education, experience, header, headers, language])
})
