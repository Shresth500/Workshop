import { Injectable } from '@angular/core';
import { ISessions, IWorkshop } from './models/IWorkshop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';
import { AuthService } from '../common/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  apiUrl = enviroment.apiUrl;
  constructor(private http: HttpClient, private auth: AuthService) {}
  getSessions(params: number) {
    return this.http.get<Required<ISessions>[]>(
      `${this.apiUrl}/workshops/${params}/sessions`
    );
  }
  getWorkshopdDetails(params: number) {
    return this.http.get<IWorkshop>(`${this.apiUrl}/workshops/${params}`);
  }
  getWorkshops(page: number = 1) {
    /**
     *
     *
     */
    //return this.http.get(
    //  `https://workshops-server.onrender.com/workshops`
    //) as Observable<IWorkshop[]>;
    return this.http.get<IWorkshop[]>(`${this.apiUrl}/workshops`, {
      params: {
        _page: page,
      },
    });
  }
  voteForSessions(sessionId: number, voteType: 'upvote' | 'downvote') {
    return this.http.put<ISessions>(
      `${this.apiUrl}/sessions/${sessionId}/${voteType}`,
      null
    );
  }

  addSessions(session: ISessions) {
    return this.http.post<ISessions>(`${this.apiUrl}/sessions`, session, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  deleteWorkshopById(workshopId: number) {
    return this.http.delete<{}>(`${this.apiUrl}/workshops/${workshopId}`);
  }
  getDatabyCategory(category: string) {
    return this.http.get<IWorkshop[]>(
      `${this.apiUrl}/workshops?category=${category}`
    );
  }
  addWorkshop(workshop: Omit<IWorkshop, 'id'>, id: number | null = null) {
    if (id === null) {
      return this.http.post<Omit<IWorkshop, 'id'>>(
        `${this.apiUrl}/workshops`,
        workshop,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    return this.http.put<Omit<IWorkshop, 'id'>>(
      `${this.apiUrl}/workshops/${id}`,
      workshop,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
