class EmployeePayrollData {
    set id(id) {
        this._id = id;
    }
    get id() {

        return this._id;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Name is Incorrect";
        }
    }

    get name() {
        return this._name;
    }

    set profilePic(profile) {
        this._profile = profile;
    }

    get profilePic() {
        return this._profile;
    }

    set gender(gender) {
        this._gender = gender;
    }
    get gender() {
        return this._gender;
    }

    set department(department) {
        this._department = department;
    }
    get department() {
        return this._department;
    }

    set salary(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    set startDate(startDate){
        let now = new Date();
        if (startDate > now) throw 'Start Date is a Future Date!';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
        throw 'Start Date is beyond 30 Days!';
        this._startDate = startDate;
    }
    get startDate(){
        return this._startDate;
    }

    set notes(notes){
        this._notes = notes;
    }
    get notes(){
        return this._notes;
    }    
    
    toString(){
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", DateOptions);
        return  "id=" + this.id +", name='" + this.name + ", gender='" + this.gender + 
        ", profilePic='" + this.profilePic + ", department='" + this.department +
        ", salary=" + this.salary + ", startDate='" + empDate + ", notes=" + this.notes;
    }


}