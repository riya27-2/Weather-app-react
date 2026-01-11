import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({info}){
   
   
   const HOT_URL="https://media.istockphoto.com/id/1410180885/photo/hot-temperature-thermometer-on-yellow-sky-with-sun-shining.jpg?s=2048x2048&w=is&k=20&c=EvhXiHlbOCthgLtUwdoOsozTMuUXYK3IrmykWy_ptKo=";
   const COLD_URL="https://media.istockphoto.com/id/182492432/photo/winter-driving-in-snow.jpg?s=612x612&w=0&k=20&c=emPNGefU_tme5_F15vVLC7lyMoJF2TytcLeAZeiW4Iw=";
   const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=";
    return(
        <div className="infoBox">
           
            <div className='cardContainer'>

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp>20 ? HOT_URL  : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        
          {info.humidity > 80 ?<ThunderstormIcon/>  : info.temp>20 ? <SunnyIcon/>  : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity={info.humidity}  </p>
          <p>Min temp={info.tempMin}&deg;C </p>
          <p>Max temp={info.tempMax}&deg;C </p>
          <p>The weather can be described as<i> {info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}