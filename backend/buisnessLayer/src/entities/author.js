import namedentity from './namedentity'

class author extends namedentity
{	
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