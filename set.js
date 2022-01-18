var employee1={
    name:'Rajesh',
    _Bonus:10000,
    yoj:2018
};
Object.defineProperty(employee1,'Bonus',{
    set:function(newBonus){
        if(newBonus<=20 && this.yoj<2015){
            this._Bonus=newBonus;
        }
    }
});