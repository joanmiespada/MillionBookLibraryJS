import namedentity from './namedentity'

class book extends namedentity
{	
	
	get author()
	{
		return this._author;
	}
	set author(a)
	{
		if(a){
			this._author=a;
		}
	}


	get genre()
	{
		return this._genre;
	}
	set genre(g)
	{
		if(g){
			this._genre=g;
		}
	}

	get publishdate()
	{
		return this._publishdate;
	}
	set publishdate(p)
	{
		if(p){
			this._publishdate=p;
		}
	}

}

export default book;


