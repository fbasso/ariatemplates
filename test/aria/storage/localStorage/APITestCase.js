/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.storage.localStorage.APITestCase",
    $dependencies : ["aria.storage.LocalStorage"],
    $extends : "test.aria.storage.base.GeneralAPIBase",
    $constructor : function () {
        this.storageLocation = "localStorage";

        this.$GeneralAPIBase.constructor.call(this);
    },
    $prototype : {
        /**
         * Test how the API work on a single instance
         */
        testOneInstanceStrings : function () {
            if (this.canRunHTML5Tests(false) || this.canRunUserDataTests()) {
                this.$GeneralAPIBase.testOneInstanceStrings.call(this);
            }
        },

        /**
         * Test the API when using two different storage instances
         */
        testTwoInstancesStrings : function () {
            if (this.canRunHTML5Tests(false) || this.canRunUserDataTests()) {
                this.$GeneralAPIBase.testTwoInstancesStrings.call(this);
            }
        }
    }
});
