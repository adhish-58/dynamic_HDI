var main = function() {
    $('.btn').click(function() {
        var startyear = $('.startyear').val();
        //var endyear = $('.endyear').val();
        var country = $('.country').val();
            $('.message').text('Success!');
            d3.csv(country + ".csv", function(data) {
              data.forEach(function(d) {
              d.year = +d.year;
              d.act_le = +d.act_le; //life_expectancy
              d.act_mys = +d.act_mys; //mean year of schooling
              d.act_eys = +d.act_eys; //expected years of schooling
              d.act_pci = +d.act_pci; //per capita income
             });
              
            for(var year_line = 0; year_line < data.length; year_line++)
            {
              if (data[year_line].year == startyear)
              {
                  console.log(data[year_line]);
                  var HDI = calculateHDI(data[year_line].act_le, data[year_line].act_mys, data[year_line].act_eys, data[year_line].act_pci);
                  $('.message').text(HDI);
                  //year_line=data.length;
              }
            }

          })

        })

}

function calculateHDI(act_le, act_mys, act_eys, act_pci)
  {
    var min_le=20; var max_le=85; var min_mys=0; var max_mys=15; var min_eys=0; var max_eys=18; var min_pci=100; var max_pci=75000;
      
      console
      
    var di_le = (act_le - min_le)/(max_le - min_le); // 0.926
      console.log(di_le)
    var di_mys = (act_mys - min_mys)/(max_mys - min_mys); // 0.773
      console.log(di_mys)
    var di_eys = (act_eys - min_eys)/(max_eys - min_eys); // 0.778
      console.log(di_eys)
    var di_edu = (di_mys + di_eys)/2; //0.775
      console.log(di_edu)
    var di_pci = (Math.log(act_pci) - Math.log(min_pci))/(Math.log(max_pci) - Math.log(min_pci));//0.855
      console.log(di_pci)
      console.log(Math.log(act_pci))

      //console.log(di_eys)
    return Math.pow((di_le * di_edu * di_pci), 1/3);//0.85
  }

$(document).ready(main);


