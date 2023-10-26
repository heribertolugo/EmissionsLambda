# EmissionsLambda
**TLDR;** Calculates a gas engines Lambda rating (air:fuel ratio) based on a old equation used by VolksWagon. more info [here](https://www.austincc.edu/wkibbe/lambda.htm) or view [austincc.edu_wkibbe_lambda.htm.pdf](https://github.com/heribertolugo/EmissionsLambda/blob/main/austincc.edu_wkibbe_lambda.htm.pdf)

# Summary
This web app built circa **2005** for Internet Explorer 5+ could be used to analyze a vehicle's emissions report for vehicles 95 or older in Connecticut, USA during this period for a few years.\
The emission report would provide HC (in ppm), CO%, CO2% and O2%. At a later time (years later) they removed O2 levels from the report, making this app pretty useless, as in order to get the value of O2 you would need an expensive machine which would be the same machine you can use to perform a diagnostic in the first place.

Using the Lambda equation provided/discovered/created by VolksWagon, given a set of values, one could determine if the vehicle is running rich, lean or stoichiometric. \
The Lambda rating also tells you how far off the vehicle is from stoichiometry, stoichiometric being 1 (optimal - perfect combustion with air/fuel ratio 14.7:1).\
This knowledge can help diagnose a vehicle for emissions failures. An expensive diagnostic machine need not be used if you have the failed emissions report and access to this app.\
A keen technician can claim to be able to determine rich or lean condition just by reading the failed emission report, but there are many scenarios where that judgement can be wrong.

![image](https://github.com/heribertolugo/EmissionsLambda/assets/26213368/fe8b6f92-b75d-48b9-8e82-505560bfea96)
