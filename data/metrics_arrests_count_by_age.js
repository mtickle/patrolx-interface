[
    {
        $match:
        /**
         * query: The query in MQL.
         */
        {
            ageAtArrest: {
                $exists: true,
                $nin: [null, "None", "", '""'],
            },
        },
    },
    {
        $group: {
            _id: "$ageAtArrest",
            ageCount: {
                $count: {},
            },
        },
    },
    {
        $sort:
        /**
         * Provide any number of field/order pairs.
         */
        {
            _id: 1,
        },
    },
    {
        $out:
            /**
             * Provide the name of the output collection.
             */
            "metrics_arrests_count_by_age",
    },
]