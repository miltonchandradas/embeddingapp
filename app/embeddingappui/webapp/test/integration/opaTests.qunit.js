sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'embeddingappui/test/integration/FirstJourney',
		'embeddingappui/test/integration/pages/SuppliersList',
		'embeddingappui/test/integration/pages/SuppliersObjectPage'
    ],
    function(JourneyRunner, opaJourney, SuppliersList, SuppliersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('embeddingappui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSuppliersList: SuppliersList,
					onTheSuppliersObjectPage: SuppliersObjectPage
                }
            },
            opaJourney.run
        );
    }
);