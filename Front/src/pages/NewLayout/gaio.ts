interface Address {
  zipCode: string | null;
  street: string | null;
  number: string | null;
  complement: string | null;
  city: string | null;
  state: string | null;
  neighborhood: string | null;
}

interface Photo {
  base64: string | null;
  type: string | null;
}

interface BusinessInfo {
  _id: { $oid: string | null };
  photos: {
    photo1: Photo;
    photo2: Photo;
    photo3: Photo;
    logo: Photo;
    schedules: Photo;
  };
  segunda: string | null;
  terca: string | null;
  quarta: string | null;
  quinta: string | null;
  sexta: string | null;
  sabado: string | null;
  domingo: string | null;
  qualitydescription1: string | null;
  qualitydescription2: string | null;
  qualitydescription3: string | null;
  quality1: string | null;
  quality2: string | null;
  quality3: string | null;
  history: string | null;
  call: string | null;
  phone: string | null;
  name: string | null;
  convertedName: string | null;
  address: Address;
  color: string | null;
  whatsApp: string | null;
  isAutonomous: string | null;
  mainColor: string | null;
  secondaryColor: string | null;
  accentColor: string | null;
  isPayer: string | null;
  origin: string | null;
  instagram: string | null;
  isFourthSecVisible: string | null;
  id: string | null;
  products: string | null;
  coverKeyWords: string | null;
  description: string | null;
  thirdTitle: string | null;
}

export const jsonData: BusinessInfo[] = [
  {
    _id: { '$oid': '652c27bd80aa95b502b8f7a4' },
    photos: {
      photo1: {
        base64: '',
        type: ''
      },
      photo2: {
        base64: '',
        type: ''
      },
      photo3: {
        base64: '',
        type: ''
      },
      logo: {
        base64: '',
        type: ''
      },
      schedules: {
        base64: '',
        type: ''
      }
    },
    segunda: '',
    terca: '',
    quarta: '',
    quinta: '',
    sexta: '',
    sabado: '',
    domingo: '',
    qualitydescription1: 'Desenvolvemos softwares com agilidade, rapidez e precisão, para atender às necessidades do cliente. Obtenha resultados de alta qualidade, eficiência e segurança.',
    qualitydescription2: 'Nosso software é projetado para atender às necessidades específicas de cada cliente, oferecendo personalização e versatilidade. Oferecemos uma solução única, intuitiva e altamente adaptável.',
    qualitydescription3: 'UI de conversão estratégica: criamos interfaces intuitivas e modernas que convertem visitantes em leads qualificados.',
    quality1: 'this is an diferential',
    quality2: 'Software voltado ao cliente',
    quality3: 'UI de alta conversão',
    history: 'A Code Presence é liderada pelo fundador, apaixonado por tecnologia desde criança. Nos últimos cinco anos, ele se dedicou a se aprofundar no mundo da programação. Uma Software House cuja missão é oferecer soluções inovadoras, aproveitando ao máximo a tecnologia existente.',
    call: 'This is a title',
    phone: '5584991097445',
    name: 'Code Presence',
    convertedName: 'code-presence',
    address: {
      zipCode: '59152-820',
      street: 'rua Adeodato José dos Reis',
      number: '3839',
      complement: 'ed Novo Sttilo',
      city: 'Parnamirim',
      state: 'Rio Grande do Norte',
      neighborhood: 'Nova Parnamirim'
    },
    color: '',
    whatsApp: '',
    isAutonomous: '1',
    mainColor: '#000000',
    secondaryColor: '#3D94B0',
    accentColor: '#F5F5F5',
    isPayer: '',
    origin: 'gaio',
    instagram: 'atila.defreitas',
    isFourthSecVisible: 'on',
    id: '60dcc4b9704de21e314952b997057dd9',
    products: 'Oferecemos soluções de desenvolvimento rápidas, personalizadas e de alta conversão. Software que atende às necessidades do cliente e que se destaca pela sua interface intuitiva.',
    coverKeyWords: 'Software-House,-Software-Development.',
    description: 'A Software House oferece desenvolvimento de software de alta qualidade e inovação para atender às suas necessidades. Nossos serviços são construídos para alcançar os objetivos desejados, fornecer soluções customizadas e tornar a experiência do usuário mais eficiente. Desenvolvemos software moderno, ágil e confiável para assegurar a satisfação de nossos clientes.',
    thirdTitle: 'this another title'
  }
];
