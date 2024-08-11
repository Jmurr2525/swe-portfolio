const Spotifyer = {
  id: 'spotifyer',
  title: 'Spotifyer',
  shortDescription: 'Categorizes your top 50 songs and curates a list based on subgenres',
  longDescription: `Spotifyer is a web application that enhances your Spotify experience by analyzing your listening habits across three tiers of data depth. From basic API insights to comprehensive streaming history analysis, Spotifyer offers users deep insights into their music preferences and introduces them to new tracks aligned with their taste.`,
  image: '/project_pics/spotifyer.png',
  technologies: ['Python', 'Spotify API', 'OAuth', 'Numpy', 'SKlearn', 'ShadCN'],
  githubLink: 'https://github.com/jmurr252/Spotify-Habits',
  services: [
    {
      title: "Basic Spotify API Insights",
      description: "Uses the Spotify API to return basic content about short-term, medium-term, and long-term listening habits and insights.",
      file: "dashboard.py",
      features: [
        "Short (1 month), Medium(4 months), Long(12 months) Listening data",
        "Provides averaged data from audio features of your music taste",
        "Provides top artists, songs, and genres based on selected term"
      ],
      explanation: "This tier provides a quick overview of your Spotify listening habits. It uses the readily available Spotify API endpoints to gather information about your top tracks, artists, and genres over different time periods.",
      images: [
        '/project_pics/insights.PNG',
      ]
    },
    {
      title: "Streaming history Habits",
      description: "Utilizes Spotify requested data to provide a more detailed analysis of listening habits.",
      file: "dashboard_pro.py",
      features: [
        "Detailed track play counts",
        "Time-of-day listening patterns",
        "Mood-based playlist generation",
        "Granular inisghts on minutes played for songs and artists "
      ],
      explanation: "The Pro tier dives deeper into your listening patterns. By requesting additional data from Spotify, we can analyze more granular details such as when you listen to music and how your mood affects your choices.",
      images: [
        '/project_pics/insights_pro.PNG',
        '/project_pics/insights_pro2.PNG',
        '/project_pics/insights_pro3.PNG'
      ]
    },
    {
      title: "Extended Streaming History Analysis",
      description: "Analyzes the complete extended streaming history file for comprehensive insights into all listening data.",
      file: "dashboard_pro_extended.py",
      features: [
        "Lifetime listening statistics",
        "Adjustable dates to see listening patterns over selected range of time",
      ],
      explanation: "This is the most comprehensive analysis tier. By processing your entire Spotify streaming history, we can provide insights into how your music taste has evolved over time and identify long-term trends in your listening habits.",
      images: [
        '/project_pics/extended.png',
        '/project_pics/extended2.png',
        '/project_pics/extended3.png',
        '/project_pics/extended4.png',
        '/project_pics/extended5.png',
      ]
    }
  ],
  challenges: [
    "Setting up OAuth and storing tokens in cache",
    "Converting data format to serializable format for visualization",
  ],
  futurePlans: [
    "Implement more advanced music feature extraction techniques",
    "Develop one big user interface for all 3 tiers",
    "Add social features to compare taste with friends",
  ]
};

export default Spotifyer;