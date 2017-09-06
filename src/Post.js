import './Post.css';
import 'whatwg-fetch';
import React, { Component } from 'react';
import { Redirect} from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Denver',
      company: '',
      description: '',
      email: '',
      how: '',
      title: '',
      url: '',
      submit: ''
    };
    // Bind all the handlers
    this.handleCity = this.handleCity.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleHow = this.handleHow.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCity(event) {
    this.setState({city: event.target.value});
  }

  handleCompany(event) {
    this.setState({company: event.target.value});
  }

  handleDescription(event) {
    this.setState({description: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleHow(event) {
    this.setState({how: event.target.value});
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleURL(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    if (!this.state.city ||
        !this.state.company ||
        !this.state.description ||
        !this.state.email ||
        !this.state.how ||
        !this.state.title ||
        !this.state.url) {
      event.preventDefault();
      this.setState({ problem: 'A field is missing'});
      return;
    }

    this.setState({ problem: '' });
    fetch(`${this.props.post}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: this.state.city,
        company: this.state.company,
        description: this.state.description,
        email: this.state.email,
        how: this.state.how,
        title: this.state.title,
        url: this.state.url
      })
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        // https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764
        this.setState({ fireRedirect: true });
      } else {
        console.log('Missing keys');
        this.setState({ problem: 'This job could not be posted because of missing data' });
      }
    });
    event.preventDefault();
  }

  render() {
    const { fireRedirect } = this.state;
    const { problem } = this.state;

    return (
      <div id='Post-div'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>Title</label>
          <textarea id='title' name='title' placeholder='Software Engineer' rows='1' value={this.state.title} onChange={this.handleTitle}/>

          <label htmlFor="company">Company</label>
          <textarea id='company' name='company' placeholder='YourCompany LLC' rows='1' value={this.state.company} onChange={this.handleCompany}/>

          <label htmlFor='url'>URL</label>
          <textarea id='url' name='url' placeholder='https://' rows='1' value={this.state.url} onChange={this.handleURL}/>

          <label htmlFor='city'>City</label>
          <select id='city' name='city' value={this.state.city} onChange={this.handleCity}>
            <option value='Aguilar'>Aguilar</option>
            <option value='Akron'>Akron</option>
            <option value='Alamosa'>Alamosa</option>
            <option value='Alma'>Alma</option>
            <option value='Antonito'>Antonito</option>
            <option value='Arriba'>Arriba</option>
            <option value='Arvada'>Arvada</option>
            <option value='Adams County'>Adams County</option>
            <option value='Aspen'>Aspen</option>
            <option value='Ault'>Ault</option>
            <option value='Aurora'>Aurora</option>
            <option value='Adams County'>Adams County</option>
            <option value='Douglas County'>Douglas County</option>
            <option value='Avon'>Avon</option>
            <option value='Basalt'>Basalt</option>
            <option value='Pitkin County'>Pitkin County</option>
            <option value='Bayfield'>Bayfield</option>
            <option value='Bennett'>Bennett</option>
            <option value='Arapahoe County'>Arapahoe County</option>
            <option value='Berthoud'>Berthoud</option>
            <option value='Weld County'>Weld County</option>
            <option value='Bethune'>Bethune</option>
            <option value='Black Hawk'>Black Hawk</option>
            <option value='Blanca'>Blanca</option>
            <option value='Blue River[11]'>Blue River[11]</option>
            <option value='Bonanza[12]'>Bonanza[12]</option>
            <option value='Boone'>Boone</option>
            <option value='Boulder'>Boulder</option>
            <option value='Bow Mar'>Bow Mar</option>
            <option value='Jefferson County'>Jefferson County</option>
            <option value='Branson'>Branson</option>
            <option value='Breckenridge'>Breckenridge</option>
            <option value='Brighton'>Brighton</option>
            <option value='Weld County'>Weld County</option>
            <option value='Brookside[15]'>Brookside[15]</option>
            <option value='Broomfield'>Broomfield</option>
            <option value='Brush'>Brush</option>
            <option value='Buena Vista'>Buena Vista</option>
            <option value='Burlington'>Burlington</option>
            <option value='Calhan'>Calhan</option>
            <option value='Campo'>Campo</option>
            <option value='Carbondale'>Carbondale</option>
            <option value='Castle Pines'>Castle Pines</option>
            <option value='Castle Rock'>Castle Rock</option>
            <option value='Cañon City'>Cañon City</option>
            <option value='Cedaredge'>Cedaredge</option>
            <option value='Centennial'>Centennial</option>
            <option value='Center'>Center</option>
            <option value='Saguache County'>Saguache County</option>
            <option value='Central City'>Central City</option>
            <option value='Clear Creek County'>Clear Creek County</option>
            <option value='Cheraw'>Cheraw</option>
            <option value='Cherry Hills Village'>Cherry Hills Village</option>
            <option value='Cheyenne Wells'>Cheyenne Wells</option>
            <option value='Coal Creek'>Coal Creek</option>
            <option value='Cokedale'>Cokedale</option>
            <option value='Collbran'>Collbran</option>
            <option value='Colorado Springs'>Colorado Springs</option>
            <option value='Columbine Valley[19]'>Columbine Valley[19]</option>
            <option value='Commerce City'>Commerce City</option>
            <option value='Cortez'>Cortez</option>
            <option value='Craig'>Craig</option>
            <option value='Crawford'>Crawford</option>
            <option value='Creede'>Creede</option>
            <option value='Crested Butte'>Crested Butte</option>
            <option value='Crestone'>Crestone</option>
            <option value='Cripple Creek'>Cripple Creek</option>
            <option value='Crook'>Crook</option>
            <option value='Crowley'>Crowley</option>
            <option value='Dacono'>Dacono</option>
            <option value='De Beque'>De Beque</option>
            <option value='Deer Trail'>Deer Trail</option>
            <option value='Del Norte'>Del Norte</option>
            <option value='Delta'>Delta</option>
            <option value='Denver'>Denver</option>
            <option value='Dillon'>Dillon</option>
            <option value='Dinosaur'>Dinosaur</option>
            <option value='Dolores'>Dolores</option>
            <option value='Dove Creek'>Dove Creek</option>
            <option value='Durango'>Durango</option>
            <option value='Eads'>Eads</option>
            <option value='Eagle'>Eagle</option>
            <option value='Eaton'>Eaton</option>
            <option value='Eckley'>Eckley</option>
            <option value='Edgewater'>Edgewater</option>
            <option value='Elizabeth'>Elizabeth</option>
            <option value='Empire'>Empire</option>
            <option value='Englewood'>Englewood</option>
            <option value='Erie'>Erie</option>
            <option value='Weld County'>Weld County</option>
            <option value='Estes Park'>Estes Park</option>
            <option value='Evans'>Evans</option>
            <option value='Fairplay'>Fairplay</option>
            <option value='Federal Heights'>Federal Heights</option>
            <option value='Firestone'>Firestone</option>
            <option value='Flagler'>Flagler</option>
            <option value='Fleming'>Fleming</option>
            <option value='Florence'>Florence</option>
            <option value='Fort Collins'>Fort Collins</option>
            <option value='Fort Lupton'>Fort Lupton</option>
            <option value='Fort Morgan'>Fort Morgan</option>
            <option value='Fountain'>Fountain</option>
            <option value='Fowler'>Fowler</option>
            <option value='Foxfield'>Foxfield</option>
            <option value='Fraser'>Fraser</option>
            <option value='Frederick'>Frederick</option>
            <option value='Frisco'>Frisco</option>
            <option value='Fruita'>Fruita</option>
            <option value='Garden City'>Garden City</option>
            <option value='Genoa'>Genoa</option>
            <option value='Georgetown'>Georgetown</option>
            <option value='Gilcrest'>Gilcrest</option>
            <option value='Glendale'>Glendale</option>
            <option value='Glenwood Springs'>Glenwood Springs</option>
            <option value='Golden'>Golden</option>
            <option value='Granada'>Granada</option>
            <option value='Granby'>Granby</option>
            <option value='Grand Junction'>Grand Junction</option>
            <option value='Grand Lake'>Grand Lake</option>
            <option value='Greeley'>Greeley</option>
            <option value='Green Mountain Falls'>Green Mountain Falls</option>
            <option value='Teller County'>Teller County</option>
            <option value='Greenwood Village'>Greenwood Village</option>
            <option value='Grover'>Grover</option>
            <option value='Gunnison'>Gunnison</option>
            <option value='Gypsum'>Gypsum</option>
            <option value='Hartman'>Hartman</option>
            <option value='Haswell'>Haswell</option>
            <option value='Haxtun'>Haxtun</option>
            <option value='Hayden'>Hayden</option>
            <option value='Hillrose'>Hillrose</option>
            <option value='Holly'>Holly</option>
            <option value='Holyoke'>Holyoke</option>
            <option value='Hooper'>Hooper</option>
            <option value='Hot Sulphur Springs'>Hot Sulphur Springs</option>
            <option value='Hotchkiss'>Hotchkiss</option>
            <option value='Hudson'>Hudson</option>
            <option value='Hugo'>Hugo</option>
            <option value='Idaho Springs'>Idaho Springs</option>
            <option value='Ignacio'>Ignacio</option>
            <option value='Iliff'>Iliff</option>
            <option value='Jamestown'>Jamestown</option>
            <option value='Johnstown'>Johnstown</option>
            <option value='Larimer County'>Larimer County</option>
            <option value='Julesburg'>Julesburg</option>
            <option value='Keenesburg'>Keenesburg</option>
            <option value='Kersey'>Kersey</option>
            <option value='Kim'>Kim</option>
            <option value='Kiowa'>Kiowa</option>
            <option value='Kit Carson'>Kit Carson</option>
            <option value='Kremmling'>Kremmling</option>
            <option value='La Jara'>La Jara</option>
            <option value='La Junta'>La Junta</option>
            <option value='La Veta'>La Veta</option>
            <option value='Lafayette'>Lafayette</option>
            <option value='Lake City'>Lake City</option>
            <option value='Lakeside[28]'>Lakeside[28]</option>
            <option value='Lakewood'>Lakewood</option>
            <option value='Lamar'>Lamar</option>
            <option value='Larkspur'>Larkspur</option>
            <option value='Las Animas'>Las Animas</option>
            <option value='LaSalle'>LaSalle</option>
            <option value='Leadville'>Leadville</option>
            <option value='Limon'>Limon</option>
            <option value='Littleton'>Littleton</option>
            <option value='Jefferson County'>Jefferson County</option>
            <option value='Douglas County'>Douglas County</option>
            <option value='Lochbuie'>Lochbuie</option>
            <option value='Adams County'>Adams County</option>
            <option value='Log Lane Village'>Log Lane Village</option>
            <option value='Lone Tree'>Lone Tree</option>
            <option value='Longmont'>Longmont</option>
            <option value='Weld County'>Weld County</option>
            <option value='Louisville'>Louisville</option>
            <option value='Loveland'>Loveland</option>
            <option value='Lyons'>Lyons</option>
            <option value='Manassa'>Manassa</option>
            <option value='Mancos'>Mancos</option>
            <option value='Manitou Springs'>Manitou Springs</option>
            <option value='Manzanola'>Manzanola</option>
            <option value='Marble'>Marble</option>
            <option value='Mead'>Mead</option>
            <option value='Meeker'>Meeker</option>
            <option value='Merino'>Merino</option>
            <option value='Milliken'>Milliken</option>
            <option value='Minturn'>Minturn</option>
            <option value='Moffat'>Moffat</option>
            <option value='Monte Vista'>Monte Vista</option>
            <option value='Montezuma'>Montezuma</option>
            <option value='Montrose'>Montrose</option>
            <option value='Monument'>Monument</option>
            <option value='Morrison'>Morrison</option>
            <option value='Mount Crested Butte[29]'>Mount Crested Butte[29]</option>
            <option value='Mountain View[30]       2'>Mountain View[30]       2</option>
            <option value='Mountain Village'>Mountain Village</option>
            <option value='Naturita'>Naturita</option>
            <option value='Nederland'>Nederland</option>
            <option value='New Castle'>New Castle</option>
            <option value='Northglenn'>Northglenn</option>
            <option value='Weld County'>Weld County</option>
            <option value='Norwood'>Norwood</option>
            <option value='Nucla'>Nucla</option>
            <option value='Nunn'>Nunn</option>
            <option value='Oak Creek'>Oak Creek</option>
            <option value='Olathe'>Olathe</option>
            <option value='Olney Springs'>Olney Springs</option>
            <option value='Ophir'>Ophir</option>
            <option value='Orchard City'>Orchard City</option>
            <option value='Ordway'>Ordway</option>
            <option value='Otis'>Otis</option>
            <option value='Ouray'>Ouray</option>
            <option value='Ovid'>Ovid</option>
            <option value='Pagosa Springs'>Pagosa Springs</option>
            <option value='Palisade'>Palisade</option>
            <option value='Palmer Lake'>Palmer Lake</option>
            <option value='Paoli'>Paoli</option>
            <option value='Paonia'>Paonia</option>
            <option value='Parachute'>Parachute</option>
            <option value='Parker'>Parker</option>
            <option value='Peetz'>Peetz</option>
            <option value='Pierce'>Pierce</option>
            <option value='Pitkin'>Pitkin</option>
            <option value='Platteville'>Platteville</option>
            <option value='Poncha Springs'>Poncha Springs</option>
            <option value='Pritchett'>Pritchett</option>
            <option value='Pueblo'>Pueblo</option>
            <option value='Ramah'>Ramah</option>
            <option value='Rangely'>Rangely</option>
            <option value='Raymer[32]'>Raymer[32]</option>
            <option value='Red Cliff'>Red Cliff</option>
            <option value='Rico'>Rico</option>
            <option value='Ridgway'>Ridgway</option>
            <option value='Rifle'>Rifle</option>
            <option value='Rockvale'>Rockvale</option>
            <option value='Rocky Ford'>Rocky Ford</option>
            <option value='Romeo'>Romeo</option>
            <option value='Rye'>Rye</option>
            <option value='Saguache[33]'>Saguache[33]</option>
            <option value='Salida'>Salida</option>
            <option value='San Luis'>San Luis</option>
            <option value='Sanford'>Sanford</option>
            <option value='Sawpit[34]'>Sawpit[34]</option>
            <option value='Sedgwick'>Sedgwick</option>
            <option value='Seibert'>Seibert</option>
            <option value='Severance'>Severance</option>
            <option value='Sheridan'>Sheridan</option>
            <option value='Sheridan Lake'>Sheridan Lake</option>
            <option value='Silt'>Silt</option>
            <option value='Silver Cliff'>Silver Cliff</option>
            <option value='Silver Plume'>Silver Plume</option>
            <option value='Silverthorne'>Silverthorne</option>
            <option value='Silverton'>Silverton</option>
            <option value='Simla'>Simla</option>
            <option value='Snowmass Village'>Snowmass Village</option>
            <option value='South Fork'>South Fork</option>
            <option value='Springfield'>Springfield</option>
            <option value='Starkville'>Starkville</option>
            <option value='Steamboat Springs'>Steamboat Springs</option>
            <option value='Sterling'>Sterling</option>
            <option value='Stratton'>Stratton</option>
            <option value='Sugar City'>Sugar City</option>
            <option value='Superior'>Superior</option>
            <option value='Jefferson County'>Jefferson County</option>
            <option value='Swink'>Swink</option>
            <option value='Telluride'>Telluride</option>
            <option value='Thornton'>Thornton</option>
            <option value='Weld County'>Weld County</option>
            <option value='Timnath'>Timnath</option>
            <option value='Trinidad'>Trinidad</option>
            <option value='Two Buttes'>Two Buttes</option>
            <option value='Vail'>Vail</option>
            <option value='Victor'>Victor</option>
            <option value='Vilas'>Vilas</option>
            <option value='Vona'>Vona</option>
            <option value='Walden'>Walden</option>
            <option value='Walsenburg'>Walsenburg</option>
            <option value='Walsh'>Walsh</option>
            <option value='Ward'>Ward</option>
            <option value='Wellington'>Wellington</option>
            <option value='Westcliffe'>Westcliffe</option>
            <option value='Westminster'>Westminster</option>
            <option value='Jefferson County'>Jefferson County</option>
            <option value='Wheat Ridge'>Wheat Ridge</option>
            <option value='Wiggins'>Wiggins</option>
            <option value='Wiley'>Wiley</option>
            <option value='Williamsburg[36]'>Williamsburg[36]</option>
            <option value='Windsor'>Windsor</option>
            <option value='Larimer County'>Larimer County</option>
            <option value='Winter Park'>Winter Park</option>
            <option value='Woodland Park'>Woodland Park</option>
            <option value='Wray'>Wray</option>
            <option value='Yampa'>Yampa</option>
            <option value='Yuma'>Yuma</option>
          </select>

          <label htmlFor='description'>Description</label>
          <textarea id='description' name='description' placeholder='Write code for...' rows='3' value={this.state.description} onChange={this.handleDescription}/>

          <label htmlFor='how'>How to apply</label>
          <textarea id='how' name='how' placeholder='Send an email to...' rows='2' value={this.state.how} onChange={this.handleHow}/>

          <label htmlFor='email'>Email (Not shared, used only by me if there's a problem)</label>
          <textarea id='email' name='email' placeholder='you@yourwebsite.com' rows='1' value={this.state.email} onChange={this.handleEmail}/>

          <input type='submit' value='Submit' />
        </form>
        <label style={{color: 'red'}}>{problem}</label>
        {fireRedirect && (
          <Redirect to='/'/>
        )}
      </div>
    );
  }
}

export default Post;
