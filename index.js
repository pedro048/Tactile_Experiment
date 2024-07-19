const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


const uriConn1 = process.env.MONGODB_URI_CONN1;

const uriConn2 = process.env.MONGODB_URI_CONN2;

const uriConn3 = process.env.MONGODB_URI_CONN3;

const conn1 = mongoose.createConnection(uriConn1, {useNewUrlParser: true});

const conn2 = mongoose.createConnection(uriConn2, {useNewUrlParser: true});

const conn3 = mongoose.createConnection(uriConn3, {useNewUrlParser: true});

//--------------------------------------------------------------------------------------------

const tactileExperimentDataSchema = {
   username: String,
   gender: String,   
   birthdate: String,
   email: String,
   phone: Number,
   duro_macio_1: String,
   duroMacio_irreal_real_1: String,
   duroMacio_tecido_1: String,
   duroMacio_material_1: String,
   rugoso_liso_1: String,
   rugosoLiso_irreal_real_1: String,
   rugosoLiso_tecido_1: String,
   rugosoLiso_material_1: String,
   Rgrossa_Rfina_1: String,
   rugosidadesGrossaFina_irreal_real_1: String,
   rugosidadesGrossaFina_tecido_1: String,
   rugosidadesGrossaFina_material_1: String,
   duro_macio_2: String,
   duroMacio_irreal_real_2: String,
   duroMacio_tecido_2: String,
   duroMacio_material_2: String,
   rugoso_liso_2: String,
   rugosoLiso_irreal_real_2: String,
   rugosoLiso_tecido_2: String,
   rugosoLiso_material_2: String,
   Rgrossa_Rfina_2: String,
   rugosidadesGrossaFina_irreal_real_2: String,
   rugosidadesGrossaFina_tecido_2: String,
   rugosidadesGrossaFina_material_2: String,
   duro_macio_3: String,
   duroMacio_irreal_real_3: String,
   duroMacio_tecido_3: String,
   duroMacio_material_3: String,
   rugoso_liso_3: String,
   rugosoLiso_irreal_real_3: String,
   rugosoLiso_tecido_3: String,
   rugosoLiso_material_3: String,
   Rgrossa_Rfina_3: String,
   rugosidadesGrossaFina_irreal_real_3: String,
   rugosidadesGrossaFina_tecido_3: String,
   rugosidadesGrossaFina_material_3: String,
   duro_macio_4: String,
   duroMacio_irreal_real_4: String,
   duroMacio_tecido_4: String,
   duroMacio_material_4: String,
   rugoso_liso_4: String,
   rugosoLiso_irreal_real_4: String,
   rugosoLiso_tecido_4: String,
   rugosoLiso_material_4: String,
   Rgrossa_Rfina_4: String,
   rugosidadesGrossaFina_irreal_real_4: String,
   rugosidadesGrossaFina_tecido_4: String,
   rugosidadesGrossaFina_material_4: String,
   duro_macio_5: String,
   duroMacio_irreal_real_5: String,
   duroMacio_tecido_5: String,
   duroMacio_material_5: String,
   rugoso_liso_5: String,
   rugosoLiso_irreal_real_5: String,
   rugosoLiso_tecido_5: String,
   rugosoLiso_material_5: String,
   Rgrossa_Rfina_5: String,
   rugosidadesGrossaFina_irreal_real_5: String,
   rugosidadesGrossaFina_tecido_5: String,
   rugosidadesGrossaFina_material_5: String,
   duro_macio_6: String,
   duroMacio_irreal_real_6: String,
   duroMacio_tecido_6: String,
   duroMacio_material_6: String,
   rugoso_liso_6: String,
   rugosoLiso_irreal_real_6: String,
   rugosoLiso_tecido_6: String,
   rugosoLiso_material_6: String,
   Rgrossa_Rfina_6: String,
   rugosidadesGrossaFina_irreal_real_6: String,
   rugosidadesGrossaFina_tecido_6: String,
   rugosidadesGrossaFina_material_6: String,
   duro_macio_7: String,
   duroMacio_irreal_real_7: String,
   duroMacio_tecido_7: String,
   duroMacio_material_7: String,
   rugoso_liso_7: String,
   rugosoLiso_irreal_real_7: String,
   rugosoLiso_tecido_7: String,
   rugosoLiso_material_7: String,
   Rgrossa_Rfina_7: String,
   rugosidadesGrossaFina_irreal_real_7: String,
   rugosidadesGrossaFina_tecido_7: String,
   rugosidadesGrossaFina_material_7: String,
   duro_macio_8: String,
   duroMacio_irreal_real_8: String,
   duroMacio_tecido_8: String,
   duroMacio_material_8: String,
   rugoso_liso_8: String,
   rugosoLiso_irreal_real_8: String,
   rugosoLiso_tecido_8: String,
   rugosoLiso_material_8: String,
   Rgrossa_Rfina_8: String,
   rugosidadesGrossaFina_irreal_real_8: String,
   rugosidadesGrossaFina_tecido_8: String,
   rugosidadesGrossaFina_material_8: String,
   duro_macio_9: String,
   duroMacio_irreal_real_9: String,
   duroMacio_tecido_9: String,
   duroMacio_material_9: String,
   rugoso_liso_9: String,
   rugosoLiso_irreal_real_9: String,
   rugosoLiso_tecido_9: String,
   rugosoLiso_material_9: String,
   Rgrossa_Rfina_9: String,
   rugosidadesGrossaFina_irreal_real_9: String,
   rugosidadesGrossaFina_tecido_9: String,
   rugosidadesGrossaFina_material_9: String,
   duro_macio_10: String,
   duroMacio_irreal_real_10: String,
   duroMacio_tecido_10: String,
   duroMacio_material_10: String,
   rugoso_liso_10: String,
   rugosoLiso_irreal_real_10: String,
   rugosoLiso_tecido_10: String,
   rugosoLiso_material_10: String,
   Rgrossa_Rfina_10: String,
   rugosidadesGrossaFina_irreal_real_10: String,
   rugosidadesGrossaFina_tecido_10: String,
   rugosidadesGrossaFina_material_10: String,
   duro_macio_11: String,
   duroMacio_irreal_real_11: String,
   duroMacio_tecido_11: String,
   duroMacio_material_11: String,
   rugoso_liso_11: String,
   rugosoLiso_irreal_real_11: String,
   rugosoLiso_tecido_11: String,
   rugosoLiso_material_11: String,
   Rgrossa_Rfina_11: String,
   rugosidadesGrossaFina_irreal_real_11: String,
   rugosidadesGrossaFina_tecido_11: String,
   rugosidadesGrossaFina_material_11: String,
   duro_macio_12: String,
   duroMacio_irreal_real_12: String,
   duroMacio_tecido_12: String,
   duroMacio_material_12: String,
   rugoso_liso_12: String,
   rugosoLiso_irreal_real_12: String,
   rugosoLiso_tecido_12: String,
   rugosoLiso_material_12: String,
   Rgrossa_Rfina_12: String,
   rugosidadesGrossaFina_irreal_real_12: String,
   rugosidadesGrossaFina_tecido_12: String,
   rugosidadesGrossaFina_material_12: String
}

const TactileExperimentData = conn1.model('TactileExperimentData', tactileExperimentDataSchema);

//---------------------------------------------------

const currentUserSchema = {
   username: String
}

const CurrentUser = conn1.model('CurrentUser', currentUserSchema);

//--------------------------------------------------------------------------------------------

const expTactileSensationsSchema = {
   id_tactile: String,
   vibrationLevel: String,
   frequency: String,
   dutyCycle: String,
   highPulseMs: String,
   lowPulseMs: String,
   hp: Number,
   lp: Number
}

const ExpTactileSensation = conn2.model("ExpTactileSensation", expTactileSensationsSchema);

//--------------------------------------------------------------------------------------------

const highPulseLowPulseDataSchema = { 
   hp: String,  
   lp: String
}

const HighPulseLowPulseData = conn3.model('HighPulseLowPulseData', highPulseLowPulseDataSchema);

//--------------------------------------------------------------------------------------------

const level_0 = new ExpTactileSensation({
   id_tactile: "0",
   vibrationLevel: "Level 0",
   frequency: "0Hz",
   dutyCycle: "0%",
   highPulseMs: "0ms",
   lowPulseMs: "0ms",
   hp: 0,
   lp: 0
});

const level_1_frequency = new ExpTactileSensation({
   id_tactile: "1",
   vibrationLevel: "Level 1 (Frequency)",
   frequency: "4Hz",
   dutyCycle: "46.68%",
   highPulseMs: "116.7ms",
   lowPulseMs: "133.3ms",
   hp: 449,
   lp: 513
});

const level_2_frequency = new ExpTactileSensation({
   id_tactile: "2",
   vibrationLevel: "Level 2 (Frequency)",
   frequency: "9Hz",
   dutyCycle: "46.68%",
   highPulseMs: "51.9ms",
   lowPulseMs: "59.21ms",
   hp: 200,
   lp: 228
});

const level_3_frequency = new ExpTactileSensation({
   id_tactile: "3",
   vibrationLevel: "Level 3 (Frequency)",
   frequency: "15Hz",
   dutyCycle: "46.68%",
   highPulseMs: "31.12ms",
   lowPulseMs: "35.55ms",
   hp: 120,
   lp: 137
});

const level_4_frequency = new ExpTactileSensation({
   id_tactile: "4",
   vibrationLevel: "Level 4 (Frequency)",
   frequency: "20Hz",
   dutyCycle: "46.68%",
   highPulseMs: "23.34ms",
   lowPulseMs: "26.66ms",
   hp: 90,
   lp: 102
});

const level_5_frequency = new ExpTactileSensation({
   id_tactile: "5",
   vibrationLevel: "Level 5 (Frequency)",
   frequency: "65Hz",
   dutyCycle: "46.68%",
   highPulseMs: "7.18ms",
   lowPulseMs: "8.2ms",
   hp: 28,
   lp: 32
});

const level_6_frequency = new ExpTactileSensation({
   id_tactile: "6",
   vibrationLevel: "Level 6 (Frequency)",
   frequency: "333Hz",
   dutyCycle: "46.68%",
   highPulseMs: "1.4ms",
   lowPulseMs: "1.6ms",
   hp: 5,
   lp: 6
});

//-----------------------------------------------------------------------------------------

const level_1_dutyCycle = new ExpTactileSensation({
   id_tactile: "7",
   vibrationLevel: "Level 1 (Duty Cycle)",
   frequency: "333Hz",
   dutyCycle: "19%",
   highPulseMs: "0.57ms",
   lowPulseMs: "2.43ms",
   hp: 2,
   lp: 9
});

const level_2_dutyCycle = new ExpTactileSensation({
   id_tactile: "8",
   vibrationLevel: "Level 2 (Duty Cycle)",
   frequency: "333Hz",
   dutyCycle: "25%",
   highPulseMs: "0.75ms",
   lowPulseMs: "2.25ms",
   hp: 3,
   lp: 9
});

const level_3_dutyCycle = new ExpTactileSensation({
   id_tactile: "9",
   vibrationLevel: "Level 3 (Duty Cycle)",
   frequency: "333Hz",
   dutyCycle: "35%",
   highPulseMs: "1.05ms",
   lowPulseMs: "1.95ms",
   hp: 4,
   lp: 8
});

const level_4_dutyCycle = new ExpTactileSensation({
   id_tactile: "10",
   vibrationLevel: "Level 4 (Duty Cycle)",
   frequency: "333Hz",
   dutyCycle: "46.68%",
   highPulseMs: "1.4ms",
   lowPulseMs: "1.6ms",
   hp: 5,
   lp: 6
});

const level_5_dutyCycle = new ExpTactileSensation({
   id_tactile: "11",
   vibrationLevel: "Level 5 (Duty Cycle)",
   frequency: "333Hz",
   dutyCycle: "73.35%",
   highPulseMs: "2.2ms",
   lowPulseMs: "0.8ms",
   hp: 8,
   lp: 3
});

const level_6_dutyCycle = new ExpTactileSensation({
   id_tactile: "12",
   vibrationLevel: "Level 6 (Duty Cycle)",
   frequency: "333Hz",
   dutyCycle: "95%",
   highPulseMs: "2.85ms",
   lowPulseMs: "0.15ms",
   hp: 11,
   lp: 1
});

//-----------------------------------------------------------------------------------------

/*
level_0.save();
level_1_frequency.save();
level_2_frequency.save();
level_3_frequency.save();
level_4_frequency.save();
level_5_frequency.save();
level_6_frequency.save();
level_1_dutyCycle.save();
level_2_dutyCycle.save();
level_3_dutyCycle.save();
level_4_dutyCycle.save();
level_5_dutyCycle.save();
level_6_dutyCycle.save();
*/

/*
ExpTactileSensation.findByIdAndRemove("63f129da82a3bea1e2691429", function(err){
   if(!err){
     console.log("Vibration level successfully deleted.");
   }
});
*/

var backgroundColor_1_1 = '#fff';
var backgroundColor_2_1 = '#fff';
var backgroundColor_3_1 = '#fff';

var backgroundColor_1_2 = '#fff';
var backgroundColor_2_2 = '#fff';
var backgroundColor_3_2 = '#fff';

var backgroundColor_1_3 = '#fff';
var backgroundColor_2_3 = '#fff';
var backgroundColor_3_3 = '#fff';

var backgroundColor_1_4 = '#fff';
var backgroundColor_2_4 = '#fff';
var backgroundColor_3_4 = '#fff';

var backgroundColor_1_5 = '#fff';
var backgroundColor_2_5 = '#fff';
var backgroundColor_3_5 = '#fff';

var backgroundColor_1_6 = '#fff';
var backgroundColor_2_6 = '#fff';
var backgroundColor_3_6 = '#fff';

var backgroundColor_1_7 = '#fff';
var backgroundColor_2_7 = '#fff';
var backgroundColor_3_7 = '#fff';

var backgroundColor_1_8 = '#fff';
var backgroundColor_2_8 = '#fff';
var backgroundColor_3_8 = '#fff';

var backgroundColor_1_9 = '#fff';
var backgroundColor_2_9 = '#fff';
var backgroundColor_3_9 = '#fff';

var backgroundColor_1_10 = '#fff';
var backgroundColor_2_10 = '#fff';
var backgroundColor_3_10 = '#fff';

var backgroundColor_1_11 = '#fff';
var backgroundColor_2_11 = '#fff';
var backgroundColor_3_11 = '#fff';

var backgroundColor_1_12 = '#fff';
var backgroundColor_2_12 = '#fff';
var backgroundColor_3_12 = '#fff';

var level;
var type_frequency_dutyCycle;

var level_absence_of_sensation;
var level_tactile_sensations;

var username;   
var birthdate; 
var email; 
var phone;

var duro_macio;
var duroMacio_irreal_real;
var duroMacio_tecido;
var duroMacio_material;

var rugoso_liso;
var rugosoLiso_irreal_real;
var rugosoLiso_tecido;
var rugosoLiso_material;

var Rgrossa_Rfina;
var rugosidadesGrossaFina_irreal_real;
var rugosidadesGrossaFina_tecido;
var rugosidadesGrossaFina_material;

var logoutVisitor;
var currentUserLogInLogOut = "Visitor";
var successRegistryLogIn;
var failureLogIn;

var hp_value; 
var lp_value; 

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//-----------------------

app.post("/confirmed_account", function(req, res){
   username = req.body.username;
   gender = req.body.gender; 
   birthdate = req.body.birthdate;
   email = req.body.email;
   phone = req.body.phone;

   const userCreated = new TactileExperimentData({
      username: username.toString(),   
      gender: gender.toString(),
      birthdate: birthdate.toString(),
      email: email.toString(),
      phone: Number(phone),
      duro_macio_1: "none",
      duroMacio_irreal_real_1: "none",
      duroMacio_tecido_1: "none",
      duroMacio_material_1: "none",
      rugoso_liso_1: "none",
      rugosoLiso_irreal_real_1: "none",
      rugosoLiso_tecido_1: "none",
      rugosoLiso_material_1: "none",
      Rgrossa_Rfina_1: "none",
      rugosidadesGrossaFina_irreal_real_1: "none",
      rugosidadesGrossaFina_tecido_1: "none",
      rugosidadesGrossaFina_material_1: "none",
      duro_macio_2: "none",
      duroMacio_irreal_real_2: "none",
      duroMacio_tecido_2: "none",
      duroMacio_material_2: "none",
      rugoso_liso_2: "none",
      rugosoLiso_irreal_real_2: "none",
      rugosoLiso_tecido_2: "none",
      rugosoLiso_material_2: "none",
      Rgrossa_Rfina_2: "none",
      rugosidadesGrossaFina_irreal_real_2: "none",
      rugosidadesGrossaFina_tecido_2: "none",
      rugosidadesGrossaFina_material_2: "none",
      duro_macio_3: "none",
      duroMacio_irreal_real_3: "none",
      duroMacio_tecido_3: "none",
      duroMacio_material_3: "none",
      rugoso_liso_3: "none",
      rugosoLiso_irreal_real_3: "none",
      rugosoLiso_tecido_3: "none",
      rugosoLiso_material_3: "none",
      Rgrossa_Rfina_3: "none",
      rugosidadesGrossaFina_irreal_real_3: "none",
      rugosidadesGrossaFina_tecido_3: "none",
      rugosidadesGrossaFina_material_3: "none",
      duro_macio_4: "none",
      duroMacio_irreal_real_4: "none",
      duroMacio_tecido_4: "none",
      duroMacio_material_4: "none",
      rugoso_liso_4: "none",
      rugosoLiso_irreal_real_4: "none",
      rugosoLiso_tecido_4: "none",
      rugosoLiso_material_4: "none",
      Rgrossa_Rfina_4: "none",
      rugosidadesGrossaFina_irreal_real_4: "none",
      rugosidadesGrossaFina_tecido_4: "none",
      rugosidadesGrossaFina_material_4: "none",
      duro_macio_5: "none",
      duroMacio_irreal_real_5: "none",
      duroMacio_tecido_5: "none",
      duroMacio_material_5: "none",
      rugoso_liso_5: "none",
      rugosoLiso_irreal_real_5: "none",
      rugosoLiso_tecido_5: "none",
      rugosoLiso_material_5: "none",
      Rgrossa_Rfina_5: "none",
      rugosidadesGrossaFina_irreal_real_5: "none",
      rugosidadesGrossaFina_tecido_5: "none",
      rugosidadesGrossaFina_material_5: "none",
      duro_macio_6: "none",
      duroMacio_irreal_real_6: "none",
      duroMacio_tecido_6: "none",
      duroMacio_material_6: "none",
      rugoso_liso_6: "none",
      rugosoLiso_irreal_real_6: "none",
      rugosoLiso_tecido_6: "none",
      rugosoLiso_material_6: "none",
      Rgrossa_Rfina_6: "none",
      rugosidadesGrossaFina_irreal_real_6: "none",
      rugosidadesGrossaFina_tecido_6: "none",
      rugosidadesGrossaFina_material_6: "none",
      duro_macio_7: "none",
      duroMacio_irreal_real_7: "none",
      duroMacio_tecido_7: "none",
      duroMacio_material_7: "none",
      rugoso_liso_7: "none",
      rugosoLiso_irreal_real_7: "none",
      rugosoLiso_tecido_7: "none",
      rugosoLiso_material_7: "none",
      Rgrossa_Rfina_7: "none",
      rugosidadesGrossaFina_irreal_real_7: "none",
      rugosidadesGrossaFina_tecido_7: "none",
      rugosidadesGrossaFina_material_7: "none",
      duro_macio_8: "none",
      duroMacio_irreal_real_8: "none",
      duroMacio_tecido_8: "none",
      duroMacio_material_8: "none",
      rugoso_liso_8: "none",
      rugosoLiso_irreal_real_8: "none",
      rugosoLiso_tecido_8: "none",
      rugosoLiso_material_8: "none",
      Rgrossa_Rfina_8: "none",
      rugosidadesGrossaFina_irreal_real_8: "none",
      rugosidadesGrossaFina_tecido_8: "none",
      rugosidadesGrossaFina_material_8: "none",
      duro_macio_9: "none",
      duroMacio_irreal_real_9: "none",
      duroMacio_tecido_9: "none",
      duroMacio_material_9: "none",
      rugoso_liso_9: "none",
      rugosoLiso_irreal_real_9: "none",
      rugosoLiso_tecido_9: "none",
      rugosoLiso_material_9: "none",
      Rgrossa_Rfina_9: "none",
      rugosidadesGrossaFina_irreal_real_9: "none",
      rugosidadesGrossaFina_tecido_9: "none",
      rugosidadesGrossaFina_material_9: "none",
      duro_macio_10: "none",
      duroMacio_irreal_real_10: "none",
      duroMacio_tecido_10: "none",
      duroMacio_material_10: "none",
      rugoso_liso_10: "none",
      rugosoLiso_irreal_real_10: "none",
      rugosoLiso_tecido_10: "none",
      rugosoLiso_material_10: "none",
      Rgrossa_Rfina_10: "none",
      rugosidadesGrossaFina_irreal_real_10: "none",
      rugosidadesGrossaFina_tecido_10: "none",
      rugosidadesGrossaFina_material_10: "none",
      duro_macio_11: "none",
      duroMacio_irreal_real_11: "none",
      duroMacio_tecido_11: "none",
      duroMacio_material_11: "none",
      rugoso_liso_11: "none",
      rugosoLiso_irreal_real_11: "none",
      rugosoLiso_tecido_11: "none",
      rugosoLiso_material_11: "none",
      Rgrossa_Rfina_11: "none",
      rugosidadesGrossaFina_irreal_real_11: "none",
      rugosidadesGrossaFina_tecido_11: "none",
      rugosidadesGrossaFina_material_11: "none",
      duro_macio_12: "none",
      duroMacio_irreal_real_12: "none",
      duroMacio_tecido_12: "none",
      duroMacio_material_12: "none",
      rugoso_liso_12: "none",
      rugosoLiso_irreal_real_12: "none",
      rugosoLiso_tecido_12: "none",
      rugosoLiso_material_12: "none",
      Rgrossa_Rfina_12: "none",
      rugosidadesGrossaFina_irreal_real_12: "none",
      rugosidadesGrossaFina_tecido_12: "none",
      rugosidadesGrossaFina_material_12: "none"
   });
   
   userCreated.save();
   successRegistryLogIn = "Account created successfully!";
   res.redirect('/views/success.ejs');
   
   console.log("username: ", username);
   console.log("gender: ", gender);
   console.log("birthdate: ", birthdate);
   console.log("email: ", email);
   console.log("phone: ", phone);
});

//-----------------------

app.post("/confirmed_login", function(req, res){
   username = req.body.username1;

   TactileExperimentData.findOne({ username: username.toString() }, function(err, user) {
      if (err) {
        console.log(err);
        return;
      }
    
      if (user) {
         CurrentUser.findByIdAndUpdate("667b03ae2605ef2116394a7e", { username: username.toString() }, function(err){
            if (err){
               console.log(err);
            }
         });
      
         currentUserLogInLogOut = username.toString();
         console.log("Current User: ", currentUserLogInLogOut);
         successRegistryLogIn = "User logged successfully!"; 
         res.redirect('/views/success.ejs');
      } else {
         failureLogIn = "User not found!";
         console.log("User not found!");
         res.redirect('/views/failure.ejs');
      }
   });
});

//-----------------------

app.post("/confirmed_logout", function(req, res){
   whiteBackGroundColor();

   logoutVisitor = req.body.logout;

   CurrentUser.findByIdAndUpdate("667b03ae2605ef2116394a7e", { username: logoutVisitor.toString() }, function(err){
      if (err){
         console.log(err);
      }
   });

   currentUserLogInLogOut = logoutVisitor.toString();
   console.log("Current User: ", currentUserLogInLogOut);

   res.redirect('/views/indeex.ejs');
});

//-----------------------

app.post("/duroMacio", function(req, res){
   duro_macio = req.body.duro_macio;
   duroMacio_irreal_real = req.body.duroMacio_irreal_real;
   duroMacio_tecido = req.body.duroMacio_tecido;
   duroMacio_material = req.body.duroMacio_material;
   level = req.body.id_level_1;
   type_frequency_dutyCycle = req.body.id_type_1;

   console.log(duro_macio);
   console.log(duroMacio_irreal_real);
   console.log(duroMacio_tecido);
   console.log(duroMacio_material);
   console.log(level);
   console.log(type_frequency_dutyCycle);

   if (currentUserLogInLogOut == "Visitor"){
      whiteBackGroundColor();
   }else{
      greenBackGroundColor_1(level);
   }   

   const newValues_1 = { 
      $set: { 
         [`duro_macio_${level}`]: duro_macio,
         [`duroMacio_irreal_real_${level}`]: duroMacio_irreal_real,
         [`duroMacio_tecido_${level}`]: duroMacio_tecido,
         [`duroMacio_material_${level}`]: duroMacio_material
      } 
   };
   
   TactileExperimentData.updateOne({ username: currentUserLogInLogOut }, newValues_1, function(err, res) {
      if (err) {
        console.error('Erro ao atualizar o documento:', err);
      } else {
        console.log('Documento atualizado com sucesso:', res);
      }
   });
   res.redirect(`/views/Level_${level}_${type_frequency_dutyCycle}.ejs`);
});

//-----------------------

app.post("/rugosoLiso", function(req, res){
   rugoso_liso = req.body.rugoso_liso;
   rugosoLiso_irreal_real = req.body.rugosoLiso_irreal_real;
   rugosoLiso_tecido = req.body.rugosoLiso_tecido;
   rugosoLiso_material = req.body.rugosoLiso_material;
   level = req.body.id_level_2;
   type_frequency_dutyCycle = req.body.id_type_2;

   console.log(rugoso_liso);
   console.log(rugosoLiso_irreal_real);
   console.log(rugosoLiso_tecido);
   console.log(rugosoLiso_material);
   console.log(level);
   console.log(type_frequency_dutyCycle);

   if (currentUserLogInLogOut == "Visitor"){
      whiteBackGroundColor();
   }else{
      greenBackGroundColor_2(level);
   }

   const newValues_2 = { 
      $set: { 
         [`rugoso_liso_${level}`]: rugoso_liso,
         [`rugosoLiso_irreal_real_${level}`]: rugosoLiso_irreal_real, 
         [`rugosoLiso_tecido_${level}`]: rugosoLiso_tecido,
         [`rugosoLiso_material_${level}`]: rugosoLiso_material
      } 
   };
   
   TactileExperimentData.updateOne({ username: currentUserLogInLogOut }, newValues_2, function(err, res) {
      if (err) {
        console.error('Erro ao atualizar o documento:', err);
      } else {
        console.log('Documento atualizado com sucesso:', res);
      }
   });
   res.redirect(`/views/Level_${level}_${type_frequency_dutyCycle}.ejs`);
});

//-----------------------

app.post("/rugosidadesGrossaFina", function(req, res){
   Rgrossa_Rfina = req.body.Rgrossa_Rfina;
   rugosidadesGrossaFina_irreal_real = req.body.rugosidadesGrossaFina_irreal_real;
   rugosidadesGrossaFina_tecido = req.body.rugosidadesGrossaFina_tecido;
   rugosidadesGrossaFina_material = req.body.rugosidadesGrossaFina_material;
   level = req.body.id_level_3;
   type_frequency_dutyCycle = req.body.id_type_3;

   console.log(Rgrossa_Rfina);
   console.log(rugosidadesGrossaFina_irreal_real);
   console.log(rugosidadesGrossaFina_tecido);
   console.log(rugosidadesGrossaFina_material);
   console.log(level);
   console.log(type_frequency_dutyCycle);

   if (currentUserLogInLogOut == "Visitor"){
      whiteBackGroundColor();
   }else{
      greenBackGroundColor_3(level);
   }

   const newValues_3 = { 
      $set: { 
         [`Rgrossa_Rfina_${level}`]: Rgrossa_Rfina,
         [`rugosidadesGrossaFina_irreal_real_${level}`]: rugosidadesGrossaFina_irreal_real, 
         [`rugosidadesGrossaFina_tecido_${level}`]: rugosidadesGrossaFina_tecido,
         [`rugosidadesGrossaFina_material_${level}`]: rugosidadesGrossaFina_material
      } 
   };
   
   TactileExperimentData.updateOne({ username: currentUserLogInLogOut }, newValues_3, function(err, res) {
      if (err) {
        console.error('Erro ao atualizar o documento:', err);
      } else {
        console.log('Documento atualizado com sucesso:', res);
      }
   });
   res.redirect(`/views/Level_${level}_${type_frequency_dutyCycle}.ejs`);
});

//-----------------------

app.post("/absence_of_sensation", function(req, res){
   level_absence_of_sensation = req.body.id_absence_of_sensation;

   console.log("Vibration Level ID: ", level_absence_of_sensation);
   
   readFromDatabase(level_absence_of_sensation);
});

//-----------------------

app.post("/tactile_sensations", function(req, res){
   level_tactile_sensations = req.body.id_tactile_sensations;

   console.log("Vibration Level ID: ", level_tactile_sensations);

   readFromDatabase(level_tactile_sensations);         
});

//-----------------------

function readFromDatabase(id_vibration_level){
   ExpTactileSensation.find({id_tactile: id_vibration_level}, function(err, exptactilesensations){
      if (err) {
         console.log(err);
      }else{
         exptactilesensations.forEach(function(exptactilesensation){
             
            hp_value = exptactilesensation.hp;
            lp_value = exptactilesensation.lp;
            sendTactileSensation(hp_value, lp_value)   
         });
      }    
   });
}

//-----------------------

function sendTactileSensation(hp_value, lp_value){

   var hp = hp_value + 2000;
   var lp = lp_value + 9000;

   console.log("hp: ", hp);
   console.log("lp: ", lp + "\n");
   
   hp = hp.toString() + "\n";
   lp = lp.toString() + "\n";

   HighPulseLowPulseData.findByIdAndUpdate("6436ece67c7d81b9fb201970", { hp: hp }, function(err){
      if (err){
         console.log(err);
      }
   });

   HighPulseLowPulseData.findByIdAndUpdate("6436ece67c7d81b9fb201970", { lp: lp }, function(err){
      if (err){
         console.log(err);
      }
   });   
}

function whiteBackGroundColor() {
   backgroundColor_1_1 = '#fff';
   backgroundColor_2_1 = '#fff';
   backgroundColor_3_1 = '#fff';

   backgroundColor_1_2 = '#fff';
   backgroundColor_2_2 = '#fff';
   backgroundColor_3_2 = '#fff';

   backgroundColor_1_3 = '#fff';
   backgroundColor_2_3 = '#fff';
   backgroundColor_3_3 = '#fff';

   backgroundColor_1_4 = '#fff';
   backgroundColor_2_4 = '#fff';
   backgroundColor_3_4 = '#fff';

   backgroundColor_1_5 = '#fff';
   backgroundColor_2_5 = '#fff';
   backgroundColor_3_5 = '#fff';

   backgroundColor_1_6 = '#fff';
   backgroundColor_2_6 = '#fff';
   backgroundColor_3_6 = '#fff';

   backgroundColor_1_7 = '#fff';
   backgroundColor_2_7 = '#fff';
   backgroundColor_3_7 = '#fff';

   backgroundColor_1_8 = '#fff';
   backgroundColor_2_8 = '#fff';
   backgroundColor_3_8 = '#fff';

   backgroundColor_1_9 = '#fff';
   backgroundColor_2_9 = '#fff';
   backgroundColor_3_9 = '#fff';

   backgroundColor_1_10 = '#fff';
   backgroundColor_2_10 = '#fff';
   backgroundColor_3_10 = '#fff';

   backgroundColor_1_11 = '#fff';
   backgroundColor_2_11 = '#fff';
   backgroundColor_3_11 = '#fff';

   backgroundColor_1_12 = '#fff';
   backgroundColor_2_12 = '#fff';
   backgroundColor_3_12 = '#fff';
 }

function greenBackGroundColor_1(level) {
   switch (level) {
      case '1':
         backgroundColor_1_1 = '#D6EFD8';
        break;
      case '2':
         backgroundColor_1_2 = '#D6EFD8';
        break;
      case '3':
         backgroundColor_1_3 = '#D6EFD8';
        break;
      case '4':
         backgroundColor_1_4 = '#D6EFD8';
        break;
      case '5':
         backgroundColor_1_5 = '#D6EFD8';
        break;
      case '6':
         backgroundColor_1_6 = '#D6EFD8';
        break;
      case '7':
         backgroundColor_1_7 = '#D6EFD8';
        break;
      case '8':
         backgroundColor_1_8 = '#D6EFD8';
        break;
      case '9':
         backgroundColor_1_9 = '#D6EFD8';
        break;
      case '10':
         backgroundColor_1_10 = '#D6EFD8';
        break;
      case '11':
         backgroundColor_1_11 = '#D6EFD8';
        break;
      case '12':
         backgroundColor_1_12 = '#D6EFD8';
        break;        
    }
 }

 function greenBackGroundColor_2(level) {
   switch (level) {
      case '1':
         backgroundColor_2_1 = '#D6EFD8';
        break;
      case '2':
         backgroundColor_2_2 = '#D6EFD8';
        break;
      case '3':
         backgroundColor_2_3 = '#D6EFD8';
        break;
      case '4':
         backgroundColor_2_4 = '#D6EFD8';
        break;
      case '5':
         backgroundColor_2_5 = '#D6EFD8';
        break;
      case '6':
         backgroundColor_2_6 = '#D6EFD8';
        break;
      case '7':
         backgroundColor_2_7 = '#D6EFD8';
        break;
      case '8':
         backgroundColor_2_8 = '#D6EFD8';
        break;
      case '9':
         backgroundColor_2_9 = '#D6EFD8';
        break;
      case '10':
         backgroundColor_2_10 = '#D6EFD8';
        break;
      case '11':
         backgroundColor_2_11 = '#D6EFD8';
        break;
      case '12':
         backgroundColor_2_12 = '#D6EFD8';
        break;                
    }  
 }

 function greenBackGroundColor_3(level) {
   switch (level) {
      case '1':
         backgroundColor_3_1 = '#D6EFD8';
        break;
      case '2':
         backgroundColor_3_2 = '#D6EFD8';
        break;
      case '3':
         backgroundColor_3_3 = '#D6EFD8';
        break;
      case '4':
         backgroundColor_3_4 = '#D6EFD8';
        break;
      case '5':
         backgroundColor_3_5 = '#D6EFD8';
        break;
      case '6':
         backgroundColor_3_6 = '#D6EFD8';
        break;
      case '7':
         backgroundColor_3_7 = '#D6EFD8';
        break;
      case '8':
         backgroundColor_3_8 = '#D6EFD8';
        break;
      case '9':
         backgroundColor_3_9 = '#D6EFD8';
        break;
      case '10':
         backgroundColor_3_10 = '#D6EFD8';
        break;
      case '11':
         backgroundColor_3_11 = '#D6EFD8';
        break;
      case '12':
         backgroundColor_3_12 = '#D6EFD8';
        break;        
        
    }
 }

function main(){

   app.use('/website_img', express.static(__dirname + '/website_img'));
   app.get("/", function(req, res){
      res.render("indeex", {homePageUsername: currentUserLogInLogOut});
   });
   app.get("/views/indeex.ejs", function(req, res){
      res.render("indeex", {homePageUsername: currentUserLogInLogOut}); 
   });
   app.get("/views/Level_1_Frequency.ejs", function(req, res){
      res.render("Level_1_Frequency", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_1: backgroundColor_1_1, backgroundColor_2_1: backgroundColor_2_1, backgroundColor_3_1: backgroundColor_3_1});  
   });
   app.get("/views/Level_2_Frequency.ejs", function(req, res){
      res.render("Level_2_Frequency", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_2: backgroundColor_1_2, backgroundColor_2_2: backgroundColor_2_2, backgroundColor_3_2: backgroundColor_3_2});  
   });
   app.get("/views/Level_3_Frequency.ejs", function(req, res){
      res.render("Level_3_Frequency", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_3: backgroundColor_1_3, backgroundColor_2_3: backgroundColor_2_3, backgroundColor_3_3: backgroundColor_3_3});  
   });
   app.get("/views/Level_4_Frequency.ejs", function(req, res){
      res.render("Level_4_Frequency", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_4: backgroundColor_1_4, backgroundColor_2_4: backgroundColor_2_4, backgroundColor_3_4: backgroundColor_3_4});  
   });
   app.get("/views/Level_5_Frequency.ejs", function(req, res){
      res.render("Level_5_Frequency", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_5: backgroundColor_1_5, backgroundColor_2_5: backgroundColor_2_5, backgroundColor_3_5: backgroundColor_3_5});  
   });
   app.get("/views/Level_6_Frequency.ejs", function(req, res){
      res.render("Level_6_Frequency", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_6: backgroundColor_1_6, backgroundColor_2_6: backgroundColor_2_6, backgroundColor_3_6: backgroundColor_3_6});  
   });
   app.get("/views/Level_1_DutyCycle.ejs", function(req, res){
      res.render("Level_1_DutyCycle", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_7: backgroundColor_1_7, backgroundColor_2_7: backgroundColor_2_7, backgroundColor_3_7: backgroundColor_3_7});  
   });
   app.get("/views/Level_2_DutyCycle.ejs", function(req, res){
      res.render("Level_2_DutyCycle", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_8: backgroundColor_1_8, backgroundColor_2_8: backgroundColor_2_8, backgroundColor_3_8: backgroundColor_3_8});  
   });
   app.get("/views/Level_3_DutyCycle.ejs", function(req, res){
      res.render("Level_3_DutyCycle", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_9: backgroundColor_1_9, backgroundColor_2_9: backgroundColor_2_9, backgroundColor_3_9: backgroundColor_3_9});  
   });
   app.get("/views/Level_4_DutyCycle.ejs", function(req, res){
      res.render("Level_4_DutyCycle", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_10: backgroundColor_1_10, backgroundColor_2_10: backgroundColor_2_10, backgroundColor_3_10: backgroundColor_3_10});  
   });
   app.get("/views/Level_5_DutyCycle.ejs", function(req, res){
      res.render("Level_5_DutyCycle", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_11: backgroundColor_1_11, backgroundColor_2_11: backgroundColor_2_11, backgroundColor_3_11: backgroundColor_3_11});  
   });
   app.get("/views/Level_6_DutyCycle.ejs", function(req, res){
      res.render("Level_6_DutyCycle", {homePageUsername: currentUserLogInLogOut, backgroundColor_1_12: backgroundColor_1_12, backgroundColor_2_12: backgroundColor_2_12, backgroundColor_3_12: backgroundColor_3_12});  
   });
   app.get("/views/TheEnd.ejs", function(req, res){
      res.render("TheEnd", {homePageUsername: currentUserLogInLogOut});  
   });
   app.get("/views/registration.ejs", function(req, res){
      res.render("registration", {homePageUsername: currentUserLogInLogOut});  
   });
   app.get("/views/success.ejs", function(req, res){
      res.render("success", {homePageUsername: currentUserLogInLogOut, successRegistryLogIn: successRegistryLogIn});  
   });
   app.get("/views/failure.ejs", function(req, res){
      res.render("failure", {homePageUsername: currentUserLogInLogOut, failureLogIn: failureLogIn});  
   });
   app.get("/views/login.ejs", function(req, res){
      res.render("login", {homePageUsername: currentUserLogInLogOut});  
   });
   app.get("/views/about.ejs", function(req, res){
      res.render("about", {homePageUsername: currentUserLogInLogOut});  
   });   
}

// set an interval to update 2 times per second:
setInterval(main, 500);

//-----------------------

server.listen(3000, function(){   
  console.log("Server is running on port 3000");
});














