export default {
  name: 'resumeExperience',
  title: 'Resume Experience',
  type: 'object',
  fields: [
    {
      name: 'schoolTitle',
      title: 'School Title',
      type: 'string'
    },
    {
      name: 'schoolYears',
      title: 'School Years ',
      type: 'string'
    },
    {
      name: 'schoolLocation',
      title: 'School Location ',
      type: 'string'
    },
    {
      name: 'schoolBody',
      title: 'School Body ',
      type: 'string'
    },
    {
      name: 'schoolProgram',
      title: 'School Program',
      type: 'string'
    }
  ],
  preview: {
    select: {
      characterName: 'characterName',
      name: 'person.name',
      imageUrl: 'person.image.asset.url'
    },
    prepare (selection) {
      const {characterName, name, imageUrl} = selection
      return {
        title: name,
        subtitle: characterName,
        imageUrl: imageUrl
      }
    }
  }

}
