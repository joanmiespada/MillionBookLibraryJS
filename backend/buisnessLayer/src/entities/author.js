import namedentity from './namedentity'


class author extends namedentity
{	
	
	static get genderTypes()
	{
		return ["male","female"];
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