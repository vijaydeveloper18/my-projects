var employee1={
    name:'ram',
    _Bonus:0,
    Yoj:2019
};
Object.defineProperty(employee1,'Bonus',{
    get:function(){
      return this._Bonus;
}});
