package com.isobar.ecm.Flipkart;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun=false,monochrome=true,features={"feature/Test.feature"},format={"pretty","html:reports","json:reports/test.json"})
public class Runner {

	
}
