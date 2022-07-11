import { RESTDataSource } from 'apollo-datasource-rest';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    // Sets the base URL for the REST API
    
    //console.log(process.env.USERS_URL);
    this.baseURL = 'https://movies-api.example.com/';
  }

  async getUser(id: string) {
    return this.get(`movies/${encodeURIComponent(id)}`);
  }
}