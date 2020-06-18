export default class TodoService {
    _apiBase = 'http://localhost:8080';

    async getData(url = '') {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }

        const body = await response.json();
        return body;
    }

    async postData(method = 'POST', url = '', data = {}) {
        await fetch(`${this._apiBase}${url}`, {
          method: method,
          headers: {    
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    }

    async getAllTasks() {
        const res = await this.getData(`/task/`);
        return res;
    }

    async toggleProps(id, prop) {
        const res = this.postData('PUT', `/task/${id}/`, prop);
        return res;
    }

    addTask(label) {
        this.postData('POST', `/task/`, label);
    }

    getTask(id) {
        return this.getResource(`/task/${id}/`);
    }

    deleteTask(id) {
        return this.postData('DELETE', `/task/${id}/`, {id: id});
    }
}