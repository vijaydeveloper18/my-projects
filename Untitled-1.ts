import get from './Get&set';

var profile={
    emp:(function(){
        function emp(name,sal){
            this.empname=name;
            this.empsalary=sal;
        }
        return emp;
    })
    sayhello:function(message){
        return "Hello "+message;
    }
}
export default untitled-1;
