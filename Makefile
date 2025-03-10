########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Brandon Faulkner
SID = 1001988125
EMAIL = bxf8125@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT = PROJ03
YOUTUBE = https://youtu.be/4f00jLBvTp4
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"