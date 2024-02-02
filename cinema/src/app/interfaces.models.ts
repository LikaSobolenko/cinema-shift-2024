export interface Movie {
    id: string;
    name: string;
    originalName: string;
    description: string;
    releaseDate: string;
    actors: [
        {
            id: string
            professions: [],
            fullName: string
        }
    ];
    directors: [
        {
            id: string
            professions: [],
            fullName: string
        }
    ];
    runtime: number;
    ageRating: string;
    genres: [],
    userRatings: {
        kinopoisk: string,
        imdb: string
    };
    img: string;
}

export interface Schedules {
    date: string;
    seances: [
        {
            time: string,
            hall: {
                name: string,
                places: []
            },
            payedTickets: [
                {
                    filmId: string,
                    row: number,
                    column: number,
                    seance: {
                        date: string,
                        time: string
                    },
                    phone: string
                }
            ]
        }
    ]
}