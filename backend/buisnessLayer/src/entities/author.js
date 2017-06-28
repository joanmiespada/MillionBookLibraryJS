import entity from './entity'

class author extends entity
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

	get gender()
	{
		return this._gender;
	}
	set gender(g)
	{
		if(g){
			this._gender=g;
		}
	}

}

export default author;