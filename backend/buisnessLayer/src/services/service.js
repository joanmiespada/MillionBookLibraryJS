class service
{	

    constructor()
    {
        this.list=[];
    }
    Save(newItemsList)
    {
      /*  let value = this.list.length;

        newItemsList.forEach(function(element) {
            element.Id =++value;
        }, this);

        let newlist= newItemsList.map(x=>{ let aux = Object.assign({},x); aux.Id = ++value; return aux });

        this.list = Object.assign({},this.list,newItemsList);
        */
       this.list=newItemsList
    }

    GetAt(index)
    {
        return this.list[index];
    }

    Count()
    {
        return this.list.length;
    }


}

export default service;