async function getBreweries() {
    try {
      const dataList = await fetch("https://api.openbrewerydb.org/breweries", {
        method: "GET"
      });
      let data = await dataList.json();
   const breweriesList = document.createElement("div");
    document.body.append(breweriesList);
    data.forEach(element => {
        let val;
        val="Name : ";
        val=val+element.name;
        document.body.append(val);
       let linebreak=document.createElement("br");
        document.body.append(linebreak);
       val="Type : ";
        val=val+element.brewery_type;
         document.body.append(val);
         linebreak=document.createElement("br");
        document.body.append(linebreak);       
        val="Street : ";
        val=val+element.street;
        document.body.append(val);
         linebreak=document.createElement("br");
        document.body.append(linebreak);
        val="URL : ";
        val=val+element.website_url;
        document.body.append(val);
        linebreak=document.createElement("br");
        document.body.append(linebreak);
        val="Phone No:";
        val=val+element.phone;
        document.body.append(val);
       linebreak=document.createElement("br");
        document.body.append(linebreak);
        linebreak=document.createElement("br");
        document.body.append(linebreak);
        
      });

} catch (error) {
    console.log(error.message);
  }
}
