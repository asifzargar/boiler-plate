class LocalStorageService {
    constructor() {}
    get(key: string) {
      return localStorage.getItem(key);
    }
    set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    get_access_token() {
      return this.get("access_token");
    }
    set_access_token(accessToken: string) {
      this.set("access_token", accessToken);
    }
  }
  
  export { LocalStorageService };
  