import entity from './entity'

class namedentity extends entity
{	
	
	get name()
	{
		return this._name;
	}
	set name(n)
	{
		if(n){
			this._name=n;
		}
	}

}

export default namedentity;