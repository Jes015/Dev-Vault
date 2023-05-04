const toolsMock = [
  {
    name: 'Tool 1',
    description: 'Description of Tool 1',
    url: 'https://example.com/tool1',
    id: 'tool1',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 2',
    description: 'Description of Tool 2',
    url: 'https://example.com/tool2',
    id: 'tool2',
    category: [
      'API',
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 3',
    description: 'Description of Tool 3',
    url: 'https://example.com/tool3',
    id: 'tool3',
    category: [
      'DESIGN'
    ]
  },
  {
    name: 'Tool 4',
    description: 'Description of Tool 4',
    url: 'https://example.com/tool4',
    id: 'tool4',
    category: [
      'REACT'
    ]
  },
  {
    name: 'Tool 5',
    description: 'Description of Tool 5',
    url: 'https://example.com/tool5',
    id: 'tool5',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 6',
    description: 'Description of Tool 6',
    url: 'https://example.com/tool6',
    id: 'tool6',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 7',
    description: 'Description of Tool 7',
    url: 'https://example.com/tool7',
    id: 'tool7',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 8',
    description: 'Description of Tool 8',
    url: 'https://example.com/tool8',
    id: 'tool8',
    category: [
      'API',
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 9',
    description: 'Description of Tool 9',
    url: 'https://example.com/tool9',
    id: 'tool9',
    category: [
      'DESIGN'
    ]
  },
  {
    name: 'Tool 10',
    description: 'Description of Tool 10',
    url: 'https://example.com/tool10',
    id: 'tool10',
    category: [
      'REACT'
    ]
  },
  {
    name: 'Tool 11',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 'tool11',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'tool12',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 13',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: 'tool13',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 12134',
    description: 'Description of Tool 1',
    url: 'https://example.com/tool1',
    id: 'tool12433214',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 22343214',
    description: 'Description of Tool 2',
    url: 'https://example.com/tool2',
    id: 'tool22134324',
    category: [
      'API',
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 31234324',
    description: 'Description of Tool 3',
    url: 'https://example.com/tool3',
    id: 'tool3214243',
    category: [
      'DESIGN'
    ]
  },
  {
    name: 'Tool 42143234',
    description: 'Description of Tool 4',
    url: 'https://example.com/tool4',
    id: 'tool412432341',
    category: [
      'REACT'
    ]
  },
  {
    name: 'Tool 52342143',
    description: 'Description of Tool 5',
    url: 'https://example.com/tool5',
    id: 'tool521341243',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 612342143',
    description: 'Description of Tool 6',
    url: 'https://example.com/tool6',
    id: 'tool61234243',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 7123424',
    description: 'Description of Tool 7',
    url: 'https://example.com/tool7',
    id: 'tool72421432',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 812342431',
    description: 'Description of Tool 8',
    url: 'https://example.com/tool8',
    id: 'tool812432143',
    category: [
      'API',
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 91234243',
    description: 'Description of Tool 9',
    url: 'https://example.com/tool9',
    id: 'tool93452354',
    category: [
      'DESIGN'
    ]
  },
  {
    name: 'Tool 103425345',
    description: 'Description of Tool 10',
    url: 'https://example.com/tool10',
    id: 'tool103452354',
    category: [
      'REACT'
    ]
  },
  {
    name: 'Tool 1132544352',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 'tool113452354',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12325352',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'tool1232543245',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 1332453254',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: 'tool13325435',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 1132544352asdfsafd',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 'tool113452354aerwqawer',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12325352',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'tool1232543245safdsafddsf',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 1332453254',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: 'tool13325435asdfsadfdsaf',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 1132544352',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 'tool23423432113452354',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12325352',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'tool1234543532543245',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 1332453254',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: 'tool133254343532455',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 1132544352',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 'tool1112432sdafsaf3452354',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12325352',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'tool12dfgdfh43532543245',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 1332453254',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: 'toolsadfsadf23413325435',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 1132544352',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 'tool11345232342dfsdafasrew32454',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12325352',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'tool123252342134werwqerwqer43245',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 1332453254',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: 'tool7655665gterytr13325435',
    category: [
      'REACT',
      'DESIGN'
    ]
  },
  {
    name: 'Tool 1132544352',
    description: 'Description of Tool 11',
    url: 'https://example.com/tool11',
    id: 't3542354tewteytedool113452354',
    category: [
      'API'
    ]
  },
  {
    name: 'Tool 12325352',
    description: 'Description of Tool 12',
    url: 'https://example.com/tool12',
    id: 'to234324wrewrol1232543245',
    category: [
      'ANIMATION'
    ]
  },
  {
    name: 'Tool 1332453254',
    description: 'Description of Tool 13',
    url: 'https://example.com/tool13',
    id: '234dwsfrwrtool13325435',
    category: [
      'REACT',
      'DESIGN'
    ]
  }
]

export default toolsMock
