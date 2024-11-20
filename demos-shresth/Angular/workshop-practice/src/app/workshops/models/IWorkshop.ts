interface ILocation {
    address: string;
    city: string;
    state: string;
}

interface IModes {
    inPerson: boolean;
    online: boolean;
}

interface IWorkshop {
    name: string;
    category: string;
    id: number;
    description: string;
    startDate: string; // ISO date string
    endDate: string; // ISO date string
    time: string;
    location: ILocation;
    modes: IModes;
    imageUrl: string;
}

interface ISessions{
    id?: number,
    workshopId: number,
    sequenceId: number,
    name: string,
    speaker: string,
    duration: number,
    level: "Basic" | "Intermediate" | "Advance",
    abstract: string,
    upvoteCount: number
}

interface IWorkshop_video_details extends IWorkshop{
    sessions: ISessions[]
}

export type { 
                ILocation, 
                IModes, 
                IWorkshop,
                ISessions,
                IWorkshop_video_details as default };
