# Dictionnaire Copado Source Format

36 objets, 989 champs. Édition publique Wisee, septembre 2026.

## Project — `copado__Project__c`

Projet rattaché à un pipeline.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Project Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Deployment_Flow__c | Pipeline | Lookup | oui | copado__Deployment_Flow__c |
| copado__Description__c | Description | textarea | oui |  |
| copado__End_Date__c | End Date | date | oui |  |
| copado__Exclude_Tabs_from_Promotion_Page__c | Exclude Tabs from Promotion Page | multipicklist | oui |  |
| copado__Index_Metadata__c | Index Metadata | boolean | non |  |
| copado__Start_Date__c | Start Date | date | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__API_Name__c | API Name | string | oui |  |
## Release — `copado__Release__c`

Livraison et éventuelle hiérarchie de releases.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Release Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Base_Branch__c | Base Branch | string | oui |  |
| copado__Description__c | Description | textarea | oui |  |
| copado__Planned_Date__c | Planned Date | date | oui |  |
| copado__Project__c | Project | Lookup | oui | copado__Project__c |
| copado__Status__c | Status | picklist | oui |  |
| copado__Version__c | Version | string | oui |  |
| copado__Completion_Date__c | Completion Date | datetime | oui |  |
| copado__Parent_Release__c | Parent Release | Lookup | oui | copado__Release__c |
| copado__Status_Notes__c | Status Notes | textarea | oui |  |
| copado__Testing_Completed__c | Testing Completed | datetime | oui |  |
| copado__Type__c | Type | picklist | oui |  |
| copado__Artifact_User_Story__c | Artifact User Story | Lookup | oui | copado__User_Story__c |
| copado__Base_Branch_Origin__c | Base Branch Origin | string | oui |  |
| copado__Environment__c | Environment | Lookup | oui | copado__Environment__c |
## User Story — `copado__User_Story__c`

Unité de changement : contexte fonctionnel, environnement, release et état.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | User Story Reference | string | non |  |
| RecordTypeId | Record Type ID | Lookup | oui | RecordType (hors carte) |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Acceptance_Criteria_Status__c | Acceptance Criteria Status | picklist | oui |  |
| copado__Acceptance_Criteria__c | Acceptance Criteria | textarea | oui |  |
| copado__Apex_Code_Coverage__c | Apex Code Coverage | percent | oui |  |
| copado__Apex_Tests_Passed__c | Apex Tests Passed | boolean | non |  |
| copado__Backburner_Rank__c | Backburner Rank | double | oui |  |
| copado__Backlog_Rank__c | Backlog Rank | double | oui |  |
| copado__Base_Branch__c | Base Branch | string | oui |  |
| copado__Business_Analyst__c | Business Analyst | Lookup | oui | User (hors carte) |
| copado__Cancellation_Reason__c | Cancellation Reason | textarea | oui |  |
| copado__Classes_Without_Coverage__c | Classes Without Coverage | double | oui |  |
| copado__Close_Date__c | Close Date | date | oui |  |
| copado__Compliance_Criteria__c | Compliance Criteria | textarea | oui |  |
| copado__Compliance_Status__c | Compliance Status | picklist | oui |  |
| copado__Compliance__c | Compliance | boolean | non |  |
| copado__Data_Privacy__c | Data Privacy | boolean | non |  |
| copado__Developer__c | Developer | Lookup | oui | User (hors carte) |
| copado__Documentation_Complete__c | Documentation Complete | boolean | non |  |
| copado__Environment_Type__c | Environment Type | string (formule) | oui |  |
| copado__Environment__c | Environment | Lookup | oui | copado__Environment__c |
| copado__Epic__c | Epic | Lookup | oui | copado__Epic__c |
| copado__Exclude_From_CBM__c | Exclude from Pipelines | boolean | non |  |
| copado__Failing_Methods__c | Failing Methods | double | oui |  |
| copado__Feature__c | Feature | Lookup | oui | copado__Copado_Feature__c (hors carte) |
| copado__Functional_Specifications__c | Functional Specifications | textarea | oui |  |
| copado__Git_Merge_Status__c | Git Merge Status | picklist | oui |  |
| copado__Git_Repository__c | Git Repository | string (formule) | oui |  |
| copado__Has_Apex_Code__c | Has Apex Code | boolean | non |  |
| copado__Is_Bundle__c | Is Bundle | boolean | non |  |
| copado__Last_Compliance_Scan_Date__c | Last Compliance Scan Date | datetime | oui |  |
| copado__Last_Promotion_Date__c | Last Promotion Date | datetime | oui |  |
| copado__Last_Validation_Deployment_Status__c | Last Validation Status | string (formule) | oui |  |
| copado__Last_Validation_Deployment__c | Last Validation Deployment | Lookup | oui | copado__Deployment__c |
| copado__Last_Validation_Promotion__c | Last Validation Promotion | Lookup | oui | copado__Promotion__c |
| copado__Latest_Commit_Date__c | Latest Commit Date | datetime | oui |  |
| copado__Legal__c | Legal | boolean | non |  |
| copado__Manual_Step_Required__c | Manual Step Required | boolean | non |  |
| copado__Manual_Tests_Passed__c | Manual Tests Passed | boolean | non |  |
| copado__Metadata_Types_in_Selection__c | Metadata Types in Selection | multipicklist | oui |  |
| copado__Minimum_Apex_Code_Coverage__c | Minimum Apex Code Coverage | percent | oui |  |
| copado__Order__c | Order | double | oui |  |
| copado__Org_Credential__c | Credential | Lookup | oui | copado__Org__c |
| copado__Parent_Epic_Title__c | Parent Epic Title | string (formule) | oui |  |
| copado__Platform__c | Platform | string (formule) | oui |  |
| copado__Priority__c | Priority | double | oui |  |
| copado__Progress_Status__c | Progress Status | string (formule) | oui |  |
| copado__Progress__c | Progress | percent | oui |  |
| copado__Project__c | Project | Lookup | oui | copado__Project__c |
| copado__Promote_Change__c | Ready to Promote | boolean | non |  |
| copado__Promote_and_Deploy__c | Promote and Deploy | boolean | non |  |
| copado__Promote_as_Single_Step__c | Promote as Single Step | boolean | non |  |
| copado__Promotion_Test_Level__c | Promotion Test Level | picklist | oui |  |
| copado__Pull_Requests_Approved__c | Pull Requests Approved | boolean | non |  |
| copado__QR_Code__c | QR Code | string (formule) | oui |  |
| copado__Release__c | Release | Lookup | oui | copado__Release__c |
| copado__Sprint__c | Sprint | Lookup | oui | copado__Sprint__c |
| copado__Status__c | Status | picklist | oui |  |
| copado__Stop_Indexing_Metadata__c | Exclude from Overlap Awareness | boolean | non |  |
| copado__Story_Points_Other__c | Planned Points | double | oui |  |
| copado__Story_Points_SFDC__c | Actual Points | double | oui |  |
| copado__Team__c | Team | Lookup | oui | copado__Team__c |
| copado__Technical_Specifications__c | Technical Specifications | textarea | oui |  |
| copado__Test_Script_Owner__c | Test Script Owner | Lookup | oui | User (hors carte) |
| copado__Theme__c | Theme | Lookup | oui | copado__Theme__c (hors carte) |
| copado__Total_Story_Points__c | Total Planned Points | double (formule) | oui |  |
| copado__Triggers_Without_Coverage__c | Triggers Without Coverage | double | oui |  |
| copado__US_Feature__c | Feature | Lookup | oui | copado__Application_Feature__c (hors carte) |
| copado__User_Story_Title__c | Title | string | oui |  |
| copado__Validate_Only__c | Validate Only | boolean | non |  |
| copado__View_in_Git__c | View in Git | string (formule) | oui |  |
| copado__userStory_Role__c | As a... | textarea | oui |  |
| copado__userStory_need__c | Want to... | textarea | oui |  |
| copado__userStory_reason__c | So that... | textarea | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
| copadoQuality__Functional_Review__c | Functional Review | Lookup | oui | copadoQuality__Functional_Review__c (hors carte) |
| cmcSf__Apex_Test_Level__c | Apex Test Level | picklist | oui |  |
| copado__Actual_Points_Other__c | Actual Points Other | double | oui |  |
| copado__Planned_Points_Other__c | Planned Points Other | double | oui |  |
| copado__Total_Actual_Points__c | Total Actual Points | double (formule) | oui |  |
| cmcSf__Migration_Date__c | Migration Date | datetime | oui |  |
| copado__Pending_Tests__c | Pending Tests | double | oui |  |
## Epic — `copado__Epic__c`

Regroupement fonctionnel des US.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Epic Ref | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Application__c | Application | Lookup | oui | copado__Application__c (hors carte) |
| copado__Cancelled_Reason__c | Cancelled Reason | string | oui |  |
| copado__Epic_Details__c | Epic Details | textarea | oui |  |
| copado__Epic_Title__c | Epic Title | string | oui |  |
| copado__Release__c | Release | Lookup | oui | copado__Release__c |
| copado__Status__c | Status | picklist | oui |  |
| copado__Description__c | Description | textarea | oui |  |
| copado__Technical_Assumptions__c | Technical Assumptions | textarea | oui |  |
## Sprint — `copado__Sprint__c`

Itération de planification des US.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Sprint Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__ActualVelocity__c | Actual Velocity | double | oui |  |
| copado__Days_in_sprint__c | Days in sprint | double | oui |  |
| copado__End_Date__c | End Date | date | oui |  |
| copado__Full_time_resources_in_sprint__c | Full time resources in sprint | double | oui |  |
| copado__InitialPlannedVelocity__c | Initial Planned Velocity | double | oui |  |
| copado__Objective__c | Sprint Goal | textarea | oui |  |
| copado__PlannedVelocity__c | Planned Velocity | double | oui |  |
| copado__Project__c | Project | Lookup | oui | copado__Project__c |
| copado__Release__c | Release | Lookup | oui | copado__Release__c |
| copado__Start_Date__c | Start Date | date | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Story_points__c | Total Capacity (Points) | double | oui |  |
| copado__Team__c | Team | Lookup | oui | copado__Team__c |
| copado__Working_Days_Left__c | Working Days Left | double (formule) | oui |  |
| copado__Working_days_in_sprint__c | Working days in sprint | double | oui |  |
| copado__Actual_Velocity__c | Actual Velocity | double | oui |  |
| copado__Planned_Velocity__c | Planned Velocity | double | oui |  |
## Team — `copado__Team__c`

Équipe associée aux US.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Team Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Active__c | Active | boolean | non |  |
| copado__Department__c | Department | picklist | oui |  |
| copado__Vision__c | Vision | textarea | oui |  |
| copado__Description__c | Description | textarea | oui |  |
| copado__Sprint_Wall_FieldSet_Name__c | Sprint Wall FieldSet Name | string | oui |  |
## User Story Task — `copado__User_Story_Task__c`

Tâche de travail d'une US ; distincte d'une étape de déploiement.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | User Story Task Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__User_Story__c | User Story | Master-Detail | non | copado__User_Story__c |
| copado__Comments__c | Comments | textarea | oui |  |
| copado__Hours_Remaining__c | Hours Remaining | double | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Subject__c | Subject | string | oui |  |
## User Story Commit — `copado__User_Story_Commit__c`

Liaison US–Snapshot Commit et contexte d'exécution de commit.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | US Commit | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__User_Story__c | User Story | Master-Detail | non | copado__User_Story__c |
| copado__Snapshot_Commit__c | Snapshot Commit | Master-Detail | non | copado__Git_Org_Commit__c |
| copado__CommitMessage__c | Commit Message | string (formule) | oui |  |
| copado__External_Id__c | External Id | string | oui |  |
| copado__LastJobExecutionId__c | Last Job Execution ID | string | oui |  |
| copado__Status__c | Status | string (formule) | oui |  |
| copado__View_in_Git__c | View in Git | string (formule) | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
## User Story Metadata — `copado__User_Story_Metadata__c`

Index des fichiers/composants associés à l'US ; le label File Name est exposé par Describe.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | User Story Metadata Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__User_Story__c | User Story | Master-Detail | non | copado__User_Story__c |
| copado__Action__c | Action | string | oui |  |
| copado__Category__c | Category | string | oui |  |
| copado__JsonInformation__c | Json Information | string | oui |  |
| copado__Last_Commit_Date__c | Last Commit Date | datetime | oui |  |
| copado__Metadata_API_Name__c | File Name | string | oui |  |
| copado__ModuleDirectory__c | Directory | string | oui |  |
| copado__Status_Icon__c | Status Icon | string (formule) | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Type__c | Type | string | oui |  |
| copado__Unique_ID__c | Unique ID | string | oui |  |
## Snapshot Commit — `copado__Git_Org_Commit__c`

Snapshot Commit, relié aux commits des US Source Format.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Commit Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__Org__c | Credential | Master-Detail | non | copado__Org__c |
| copado__Changes__c | Changes | textarea | oui |  |
| copado__Commit_Date__c | Commit Date | datetime | oui |  |
| copado__Commit_Id__c | Commit Id | string | oui |  |
| copado__Commit_Message__c | Commit Message | textarea | oui |  |
| copado__Git_Backup__c | Git Snapshot | Lookup | oui | copado__Git_Backup__c |
| copado__Git_Operation__c | Git Operation | picklist | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__View_in_Git__c | View in Git | string (formule) | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
## Git Snapshot — `copado__Git_Backup__c`

Git Snapshot : configuration du snapshot, dépôt, credential et pipeline.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Git Snapshot Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Git_Repository__c | Git Repository | Master-Detail | non | copado__Git_Repository__c |
| copado__Org__c | Credential | Master-Detail | non | copado__Org__c |
| copado__Branch__c | Branch | string | oui |  |
| copado__Compliance_Status__c | Compliance Status | string | oui |  |
| copado__Frequency__c | Frequency | picklist | oui |  |
| copado__Git_Snapshot_Permissions__c | Git Snapshot Permissions | picklist | oui |  |
| copado__Last_Backup__c | Last Snapshot | datetime | oui |  |
| copado__Last_Compliance_Scan_Date__c | Last Compliance Scan Date | datetime | oui |  |
| copado__Metadata_Types__c | Metadata Types | textarea | oui |  |
| copado__View_in_Git__c | View in Git | string (formule) | oui |  |
| copado__Cron_Expression__c | Cron Expression | string | oui |  |
| copado__External_Id__c | External Id | string | oui |  |
| copado__Other_Information__c | Other Information | textarea | oui |  |
| copado__Pipeline__c | Pipeline | Lookup | oui | copado__Deployment_Flow__c |
| copado__Scope__c | Scope | textarea | oui |  |
| copado__Snapshot_Frequency__c | Frequency | picklist | oui |  |
| copado__Scheduled_Commit_Message__c | Commit Message | textarea | oui |  |
| copado__Apex_Job_ID__c | Apex Job ID | string | oui |  |
## Git Repository — `copado__Git_Repository__c`

Dépôt Git référencé par le pipeline et les snapshots SFDX.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Git Repository Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Branch_Base_URL__c | Branch Base URL | string | oui |  |
| copado__Commit_Base_URL__c | Commit Base URL | string | oui |  |
| copado__Git_Provider__c | Git Provider | picklist | oui |  |
| copado__Pull_Request_Base_URL__c | Pull Request Base URL | string | oui |  |
| copado__Source_Format__c | Source Format | picklist | oui |  |
| copado__Tag_Base_URL__c | Tag Base URL | string | oui |  |
| copado__URI__c | URI | string | oui |  |
| copado__Allow_Functions_Git_Cache__c | Allow Functions Git Cache | boolean | non |  |
| copado__Is_repository_connected_via_copa_tunnel__c | Is repository connected via copa tunnel? | picklist | oui |  |
| copado__OAuth__c | OAuth | boolean | non |  |
| copado__Enterprise_Hostname__c | GitHub Enterprise Hostname | string | oui |  |
## Promotion — `copado__Promotion__c`

Sélection d'US, source/destination, merge, validation et backpromotion.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Promotion Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Back_Promotion__c | Is Back-Promotion | boolean | non |  |
| copado__Completed__c | Completed | boolean | non |  |
| copado__Connection_Behavior__c | Connection Behavior | string | oui |  |
| copado__Create_Full_Permission_Sets_Step__c | Create Full Permission Sets Step | boolean | non |  |
| copado__Create_Full_Profiles_Step__c | Create Full Profiles Step | boolean | non |  |
| copado__Destination_Environment__c | Destination Environment | Lookup | oui | copado__Environment__c |
| copado__Destination_Org_Credential__c | Destination Credential | Lookup | oui | copado__Org__c |
| copado__Exclude_From_Auto_Resolve__c | Exclude From Auto Resolve | multipicklist | oui |  |
| copado__Last_Deployment_Execution_Id__c | Last Deployment Execution Id | string | oui |  |
| copado__Last_Promotion_Execution_Id__c | Last Promotion Execution Id | string | oui |  |
| copado__Merge_Conflict__c | Merge Conflict | boolean | non |  |
| copado__Order_by__c | Order User Stories by | string | oui |  |
| copado__Platform__c | Platform | string (formule) | oui |  |
| copado__Project__c | Project | Lookup | oui | copado__Project__c |
| copado__Release__c | Release | Lookup | oui | copado__Release__c |
| copado__Send_Deployment_Complete_email__c | Notify When Complete | boolean | non |  |
| copado__Source_Environment__c | Source Environment | Lookup | oui | copado__Environment__c |
| copado__Source_Org_Credential__c | Source Credential | Lookup | oui | copado__Org__c |
| copado__Status__c | Status | picklist | oui |  |
| copado__Is_Rolled_Back__c | Is Rolled Back? | boolean | non |  |
| copado__Override_Destination_Changes__c | Override Destination Changes | boolean | non |  |
| copado__Pipeline__c | Pipeline | Lookup | oui | copado__Deployment_Flow__c |
| copado__View_in_Git__c | View in Git | string (formule) | oui |  |
| copado__Promotion_Method__c | Promotion Method | picklist | oui |  |
| copado__Pull_Requests_Approved__c | Pull Requests Approved | boolean | non |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
| cmcSf__Apex_Test_Level__c | Apex Test Level | picklist | oui |  |
| cmcSf__Attach_Vlocity_Build_File__c | Attach Vlocity(SFI) Build File | boolean | non |  |
| cmcSf__Debug_Mode__c | Debug Mode | boolean | non |  |
| cmcSf__Ignore_Deployment_Warnings__c | Ignore Deployment Warnings | boolean | non |  |
| cmcSf__Ignore_Rollback_Deployment_Warnings__c | Ignore Rollback Deployment Warnings | boolean | non |  |
| cmcSf__Last_Rollback_Execution_Id__c | Last Rollback Execution Id | string | oui |  |
| cmcSf__Recreate_Promotion_Branch__c | Recreate Promotion Branch | boolean | non |  |
| cmcSf__Rollback_Status__c | Rollback Status | picklist | oui |  |
| cmcSf__Rolled_Back_Date__c | Rolled Back Date | date | oui |  |
| cmcSf__Validate_Deploy_Request_Id__c | Validate Deploy Request Id | string | oui |  |
## Promoted User Story — `copado__Promoted_User_Story__c`

Jonction US–Promotion ; statut Active/Outdated, pas un résultat de déploiement.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Promoted User Story Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__User_Story__c | User Story | Master-Detail | non | copado__User_Story__c |
| copado__Promotion__c | Promotion | Master-Detail | non | copado__Promotion__c |
| copado__Status__c | Active / Outdated | picklist | oui |  |
## Deployment — `copado__Deployment__c`

Enregistrement de livraison relié à la promotion ; l'exécution est portée par les jobs.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Deployment Name | string | oui |  |
| RecordTypeId | Record Type ID | Lookup | oui | RecordType (hors carte) |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Active__c | Active | boolean | non |  |
| copado__ApiName__c | Api Name | string | oui |  |
| copado__Attach_Deployment_File__c | Attach Deployment File | boolean | non |  |
| copado__Build_Task__c | Build Task | Lookup | oui | copado__Build_Task__c (hors carte) |
| copado__Completed__c | % Completed | percent (formule) | oui |  |
| copado__Compliance_Status__c | Compliance Status | string | oui |  |
| copado__Date__c | Date | datetime | oui |  |
| copado__Deployed__c | % Deployed | percent (formule) | oui |  |
| copado__Deployment_Completed_email_sent__c | Deployment Completed email sent | boolean | non |  |
| copado__Deployment_Last_Step__c | Deployment Last Step | string | oui |  |
| copado__Deployment_Source_Type__c | Deployment Source Type | string | oui |  |
| copado__Deployment_Type__c | Deployment Type | string | oui |  |
| copado__Deployment_command_sent__c | Deployment command sent | datetime | oui |  |
| copado__Description__c | Description | string | oui |  |
| copado__Do_Not_Update_Promotion__c | Do Not Update Promotion | boolean | non |  |
| copado__Execution_Context__c | Execution Context | picklist | oui |  |
| copado__Flag_Status__c | Flag Status | string (formule) | oui |  |
| copado__From_Org__c | Source Credential | Lookup | oui | copado__Org__c |
| copado__Git_Repository__c | Git Repository | string (formule) | oui |  |
| copado__Last_Compliance_Scan_Date__c | Last Compliance Scan Date | datetime | oui |  |
| copado__Last_Deployment_Execution_Id__c | Last Deployment Execution Id | string | oui |  |
| copado__Parent_Deployment__c | Parent Deployment | Lookup | oui | copado__Deployment__c |
| copado__Paused__c | Paused | boolean | non |  |
| copado__Promotion__c | Promotion | Lookup | oui | copado__Promotion__c |
| copado__Schedule__c | Schedule | picklist | oui |  |
| copado__Send_Deployment_Complete_email__c | Send Deployment Complete email | boolean | non |  |
| copado__Server_URL__c | Server_URL | string (formule) | oui |  |
| copado__Source_Environment__c | Source Environment | string (formule) | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Template__c | Template | Lookup | oui | copado__Deployment__c |
| copado__Count_Completed__c | # Completed | double (formule) | oui |  |
| copado__Deployment_Jobs_Count__c | Deployment Jobs Count | double (formule) | oui |  |
| copado__SUM_Deployed__c | SUM Deployed | percent (formule) | oui |  |
| copado__Rolled_back_Deployment__c | Rolled back Deployment | Lookup | oui | copado__Deployment__c |
| copado__Platform__c | Platform | string (formule) | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
## Pipeline — `copado__Deployment_Flow__c`

Pipeline ; SFDX identifie ici la plateforme Source Format.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Pipeline Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Active__c | Active | boolean | non |  |
| copado__Block_Commits__c | Block Commits | boolean | non |  |
| copado__Branch_Management_Coordinates__c | Branch Management Coordinates | textarea | oui |  |
| copado__Calculate_Based_on__c | Calculate Based on | picklist | oui |  |
| copado__CommitJobTemplate__c | Commit Job Template | Lookup | oui | copado__JobTemplate__c |
| copado__Copado_DX_Mode__c | Copado DX Mode | picklist | oui |  |
| copado__Apply_Connection_Behaviours_to_existing__c | Apply Connection Behaviors to All | boolean | non |  |
| copado__Deployment_Job_Template__c | Deployment Job Template | Lookup | oui | copado__JobTemplate__c |
| copado__Disable_Validations__c | Disable Validations | boolean | non |  |
| copado__Enable_Copado_DX__c | Enable Copado DX | boolean | non |  |
| copado__Enable_Smart_Conflict_Resolution__c | Enable Smart Conflict Resolution | boolean | non |  |
| copado__Equal_Branch_Environment_Name__c | Enforce branch/env naming convention | boolean | non |  |
| copado__Exclude_From_Auto_Resolve__c | Exclude From Auto Resolve | multipicklist | oui |  |
| copado__Flow_Step_Coordinates__c | Flow Step Coordinates | textarea | oui |  |
| copado__Git_Repository__c | Git Repository | Lookup | oui | copado__Git_Repository__c |
| copado__Hide_Tabs__c | Hide Tabs | multipicklist | oui |  |
| copado__Main_Branch__c | Main Branch | string | oui |  |
| copado__Manage_Branches__c | Pipeline Manager | string (formule) | oui |  |
| copado__Merge_Strategy__c | Auto Resolve Conflict Strategy | picklist | oui |  |
| copado__Order_by__c | Order User Stories by | string | oui |  |
| copado__Platform__c | Platform | picklist | non |  |
| copado__Continuous_Delivery_Configuration_Json__c | Continuous Delivery Configuration Json | textarea | oui |  |
| copado__Promotion_Job_Template__c | Promotion Job Template | Lookup | oui | copado__JobTemplate__c |
| copado__Static_Code_Analysis_Settings__c | Static Code Analysis Settings | Lookup | oui | copado__Static_Code_Analysis_Settings__c (hors carte) |
| copado__Continuous_Delivery_Enabled__c | Continuous Delivery Enabled | boolean | non |  |
| cmcSf__Builder_Data__c | Builder Data | textarea | oui |  |
| cmcSf__Initialization_Data__c | Initialization Data | textarea | oui |  |
## Pipeline Connection — `copado__Deployment_Flow_Step__c`

Pipeline Connection : liaison source–destination dans un pipeline.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Pipeline Connection Reference | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__Deployment_Flow__c | Pipeline | Master-Detail | non | copado__Deployment_Flow__c |
| copado__Automatically_Merge_and_Deploy__c | Automatically Merge and Deploy | boolean | non |  |
| copado__Branch__c | Source Branch | string | oui |  |
| copado__Commits_Ahead__c | Commits Ahead | double | oui |  |
| copado__Commits_Behind__c | Commits Behind | double | oui |  |
| copado__Connection_Behavior_Override__c | Connection Behavior Override | Lookup | oui | copado__Connection_Behavior__c (hors carte) |
| copado__Connection_Behavior__c | Connection Behavior | string (formule) | oui |  |
| copado__Destination_Branch__c | Destination Branch | string | oui |  |
| copado__Destination_Environment__c | Destination Environment | Lookup | oui | copado__Environment__c |
| copado__Enable_as_Scratch_Org_Destination__c | Enable as Scratch Org Target | picklist | oui |  |
| copado__Last_Merge_Base__c | Last Merge Base | datetime | oui |  |
| copado__Last_Merge_CBM_Sync__c | Last Merge CBM Sync | datetime | oui |  |
| copado__Last_Pull_CBM_Sync__c | Last Pull CBM Sync | datetime | oui |  |
| copado__Merge_Auto_Resolved_Files__c | Merge Auto Resolved Files | textarea | oui |  |
| copado__Pull_Auto_Resolved_Files__c | Pull Auto Resolved Files | textarea | oui |  |
| copado__Source_Environment__c | Source Environment | Lookup | oui | copado__Environment__c |
| copado__Sync_Merge_State__c | Sync Merge State | picklist | oui |  |
| copado__Sync_Pull_State__c | Sync Pull State | picklist | oui |  |
| copado__Test_Level__c | Test Level | picklist | oui |  |
| copado__Stage_Connection__c | Stage Connection | Lookup | oui | copado__Stage_Connection__c |
| copado__Next_Stage__c | Next Stage | string (formule) | oui |  |
| copado__Stage__c | Stage | string (formule) | oui |  |
| copado__Platform__c | Platform | string (formule) | oui |  |
## Environment — `copado__Environment__c`

Environnement et paramètres d'exécution Source Format.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Environment Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__CommitJobTemplateOverride__c | Commit Job Template Override | Lookup | oui | copado__JobTemplate__c |
| copado__Compliance_Rule_Group__c | Compliance Rule Group | Lookup | oui | copado__Compliance_Rule_Group__c (hors carte) |
| copado__Compliance_Scan_Events__c | Compliance Scan Events | multipicklist | oui |  |
| copado__Compliance_Status__c | Compliance Status | string | oui |  |
| copado__Connection_Behavior__c | Incoming Connection Behavior | Lookup | oui | copado__Connection_Behavior__c (hors carte) |
| copado__Current_Code_Coverage__c | Current Code Coverage | percent | oui |  |
| copado__Current_SCA_Score__c | Current SCA Score | double | oui |  |
| copado__API_Name__c | API Name | string | oui |  |
| copado__Deployment_Job_Template_Override__c | Deployment Job Template Override | Lookup | oui | copado__JobTemplate__c |
| copado__Index_Back_Promotion_metadata__c | Index Back Promotion Metadata | boolean | non |  |
| copado__Last_Compliance_Scan_Date__c | Last Compliance Scan Date | datetime | oui |  |
| copado__Last_Refresh_Date__c | Last Refresh Date | date | oui |  |
| copado__Latest_Deployment_Status__c | Latest Deployment Status | picklist | oui |  |
| copado__Latest_Deployment__c | Latest Deployment | Lookup | oui | copado__Deployment__c |
| copado__Maximum_SCA_Score__c | Maximum SCA Score | double | oui |  |
| copado__Minimum_Apex_Test_Coverage__c | Minimum Apex Test Coverage | percent | oui |  |
| copado__Namespace__c | Namespace | string | oui |  |
| copado__Org_ID__c | Org ID | string | oui |  |
| copado__Platform__c | Platform | picklist | oui |  |
| copado__Promotion_Default_Credential__c | Default Credential | picklist | oui |  |
| copado__Promotion_Job_Template_Override__c | Promotion Job Template Override | Lookup | oui | copado__JobTemplate__c |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
| copado__Run_all_tests__c | Run all local tests | boolean | non |  |
| copado__Type__c | Type | picklist | oui |  |
| copado__Validation_Promotion_Default_Credential__c | Validation Promotion Default Credential | picklist | oui |  |
| copado__Enable_Rollback__c | Enable Rollback | boolean | non |  |
| copado__Run_specified_tests__c | Run Specified Tests | boolean | non |  |
| cmcSf__Apex_Test_Level__c | Apex Test Level | picklist | oui |  |
## Credential — `copado__Org__c`

Credential rattaché à l'environnement.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Credential Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Compliance_Status__c | Compliance Status | string | oui |  |
| copado__Custom_Domain__c | Custom Domain | url | oui |  |
| copado__Default_Credential__c | Default Credential | boolean | non |  |
| copado__Default_Scratch_Org_Definition__c | Default Scratch Org Definition | Lookup | oui | copado__Scratch_Org_Definition__c (hors carte) |
| copado__Developer_Hub_Org__c | Developer Hub Credential | Lookup | oui | copado__Org__c |
| copado__Disable_Validation__c | Disable Validation | boolean | non |  |
| copado__Environment__c | Environment | Lookup | oui | copado__Environment__c |
| copado__Error__c | Error | string | oui |  |
| copado__Last_Apex_Tests_Datetime__c | Last Apex Tests Datetime | datetime | oui |  |
| copado__Last_Apex_Tests_Status__c | Last Apex Tests Status | picklist | oui |  |
| copado__Last_Compliance_Scan_Date__c | Last Compliance Scan Date | datetime | oui |  |
| copado__Last_Git_Backup_Datetime__c | Last Git Backup Datetime | datetime | oui |  |
| copado__Last_Git_Backup_Status__c | Last Git Backup Status | picklist | oui |  |
| copado__Metadata_Types__c | Metadata Types | textarea | oui |  |
| copado__Minimum_Apex_Test_Coverage__c | Minimum Apex Test Coverage | percent (formule) | oui |  |
| copado__Oauth_Signature__c | Oauth Signature | string | oui |  |
| copado__Org_Type__c | Org Type | picklist | oui |  |
| copado__Platform__c | Platform | string (formule) | oui |  |
| copado__Profile_Name__c | Profile Name | string | oui |  |
| copado__SFDC_Org_ID__c | SFDC Org ID | string | oui |  |
| copado__Scratch_Org_Expiration_Date__c | Scratch Org Expiration Date | datetime | oui |  |
| copado__Scratch_Org_Status__c | Scratch Org Status | picklist | oui |  |
| copado__Test_Frequency__c | Test Frequency | picklist | oui |  |
| copado__Token__c | Security Token | string | oui |  |
| copado__Type_Icon__c | Type Icon | string (formule) | oui |  |
| copado__Username__c | Username | string | oui |  |
| copado__Validated_Date__c | Validated Date | datetime | oui |  |
| copado__Validated_Status__c | Validated Status | string (formule) | oui |  |
| copado__is_Developer_Hub_Org__c | Is Developer Hub Credential | boolean | non |  |
| copado__Custom_Connected_App_Info__c | Custom Connected App Info | Lookup | oui | copado__Custom_Connected_App_Info__c (hors carte) |
## Stage — `copado__Stage__c`

Étape logique utilisée par les connexions de stages et les conditions de quality gates.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Stage Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Display_Name__c | Display Name | string | oui |  |
| copado__Meta_Stage__c | Meta Stage | picklist | oui |  |
## Stage Connection — `copado__Stage_Connection__c`

Position de stage dans un pipeline et lien vers la connexion suivante.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Stage Connection Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Pipeline__c | Pipeline | Master-Detail | non | copado__Deployment_Flow__c |
| copado__Stage__c | Stage | Master-Detail | non | copado__Stage__c |
| copado__Next_Stage_Connection__c | Next Stage Connection | Lookup | oui | copado__Stage_Connection__c |
| copado__Next_Stage__c | Next Stage | string (formule) | oui |  |
## Job Execution — `copado__JobExecution__c`

Exécution de commit, merge ou déploiement ; références aux objets de contexte.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Job Execution Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Callback__c | Callback | string | oui |  |
| copado__Commit__c | Commit | Lookup | oui | copado__Git_Commit__c (hors carte) |
| copado__DataJson__c | DataJson | textarea | oui |  |
| copado__Deployment__c | Deployment | Lookup | oui | copado__Deployment__c |
| copado__Destination__c | Destination | Lookup | oui | copado__Environment__c |
| copado__ErrorMessage__c | Error Message | textarea | oui |  |
| copado__ParentId__c | Parent Id(Formula) | string (formule) | oui |  |
| copado__ParentRecord_Id__c | Parent Id | string | oui |  |
| copado__Pipeline__c | Pipeline | Lookup | oui | copado__Deployment_Flow__c |
| copado__Promotion__c | Promotion | Lookup | oui | copado__Promotion__c |
| copado__Snapshot__c | Snapshot | Lookup | oui | copado__Git_Backup__c |
| copado__Source__c | Source | Lookup | oui | copado__Environment__c |
| copado__Status__c | Status | picklist | oui |  |
| copado__Template__c | Template | Lookup | oui | copado__JobTemplate__c |
| copado__UserStoryCommit__c | User Story Commit | Lookup | oui | copado__User_Story_Commit__c |
| copado__VolumeOptions__c | VolumeOptions | textarea | oui |  |
| copado__Context__c | Context | string (formule) | oui |  |
| copado__Job_Step__c | Job Step | Lookup | oui | copado__JobStep__c |
## Job Step — `copado__JobStep__c`

Étape définie dans un template, une US ou une exécution ; lien vers le dernier résultat.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Job Step Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__ApiName__c | Api Name | string | oui |  |
| copado__ConfigJson__c | ConfigJson | textarea | oui |  |
| copado__CustomType__c | Type | string | oui |  |
| copado__Destination_Id__c | Destination Id | string (formule) | oui |  |
| copado__ExecutionSequence__c | Execution Sequence | picklist | oui |  |
| copado__Git_Repository__c | Git Repository | string (formule) | oui |  |
| copado__JobExecution__c | Job Execution | Lookup | oui | copado__JobExecution__c |
| copado__JobTemplate__c | Job Template | Lookup | oui | copado__JobTemplate__c |
| copado__Order__c | Order | double | non |  |
| copado__Parent_Owner_Id__c | Parent Owner Id | string (formule) | oui |  |
| copado__Pipeline_Id__c | Pipeline Id | string (formule) | oui |  |
| copado__ResultDataJson__c | Result Data Json | textarea | oui |  |
| copado__Result__c | Last Result | Lookup | oui | copado__Result__c |
| copado__Source_Id__c | Source Id | string (formule) | oui |  |
| copado__Status__c | Status | string (formule) | oui |  |
| copado__Type__c | Behaviour | picklist | non |  |
| copado__UserStory__c | User Story | Lookup | oui | copado__User_Story__c |
| copado__Quality_Gate_Rule_Condition__c | Quality Gate Rule Condition | Lookup | oui | copado__Quality_Gate_Rule_Condition__c |
| copado__Quality_Gate_Rule__c | Quality Gate Rule | Lookup | oui | copado__Quality_Gate_Rule__c |
| copado__Resource_Observations__c | Resource Observations | multipicklist | oui |  |
| copado__Sub_Job_Execution__c | Sub Job Execution | string | oui |  |
| copado__Git_RepositoryId__c | Git RepositoryId | string | oui |  |
| copado__PipelineId__c | PipelineId | string | oui |  |
| copado__IsSkipped__c | Is Skipped? | boolean | non |  |
| copado__Result_Viewer_Component__c | Result Viewer Component | string | oui |  |
| copado__SkipCondition__c | Skip Step Condition | textarea | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
## Job Template — `copado__JobTemplate__c`

Modèle d'exécution composé de Job Steps.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Job Template Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__ApiName__c | API Name | string | oui |  |
| copado__Description__c | Description | textarea | oui |  |
| copado__Type__c | Type | picklist | non |  |
| copado__Version__c | Version | double | non |  |
| copado__VolumeOptions__c | VolumeOptions | textarea | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
## Result — `copado__Result__c`

Résultat d'une étape : statut, durée, erreur et contexte.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Result Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__ApexCallback__c | Apex Callback | string | oui |  |
| copado__Custom_Function_Used_Credits__c | Copado Credits Used | double | oui |  |
| copado__Custom_Function_Used_Minutes__c | Function Used Minutes | double | oui |  |
| copado__Deployment__c | Deployment | Lookup | oui | copado__Deployment__c |
| copado__Description__c | Description | textarea | oui |  |
| copado__Duration__c | Duration (in seconds) | double (formule) | oui |  |
| copado__End_Time__c | End Time | datetime | oui |  |
| copado__Error_Code__c | Error Code | string | oui |  |
| copado__Error_Message__c | Error Message | textarea | oui |  |
| copado__Function_Worker_Size__c | Function Worker Size | picklist | oui |  |
| copado__Function__c | Function | Lookup | oui | copado__Function__c |
| copado__JobStep__c | Job Step | Lookup | oui | copado__JobStep__c |
| copado__Job_Id__c | External Job ID | string | oui |  |
| copado__Job_Type__c | Job API Name | picklist | non |  |
| copado__Link__c | External Result Link | url | oui |  |
| copado__ParentId__c | Context ID | string | oui |  |
| copado__Progress_Status__c | Progress Status | string | oui |  |
| copado__Promotion__c | Promotion | Lookup | oui | copado__Promotion__c |
| copado__Result_Data__c | Result Data | textarea | oui |  |
| copado__Start_Time__c | Start Time | datetime | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Test__c | Test | Lookup | oui | copado__Test__c |
| copado__Timeout__c | Timeout (minutes) | double | oui |  |
| copado__User_Story__c | User Story | Lookup | oui | copado__User_Story__c |
| copado__Parent__c | Parent | string (formule) | oui |  |
| copado__CreditSyncStatus__c | Credit Sync Status | string | oui |  |
| copado__Job_Execution__c | Job Execution | string (formule) | oui |  |
## Function — `copado__Function__c`

Fonction technique référencée par un Result ; l'ApiName d'un JobStep est du texte.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Function Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__API_Name__c | API Name | string | non |  |
| copado__ApexClass__c | ApexClass | string | oui |  |
| copado__Callback_Type__c | Callback Type | picklist | oui |  |
| copado__Description__c | Description | textarea | oui |  |
| copado__FlowHandler__c | FlowHandler | string | oui |  |
| copado__Image_Name__c | Image Name | string | oui |  |
| copado__Options__c | Options | textarea | oui |  |
| copado__Parameters__c | Parameters | textarea | oui |  |
| copado__Script__c | Script | textarea | oui |  |
| copado__Timeout__c | Timeout | double | oui |  |
| copado__Type__c | Type | picklist | non |  |
| copado__Version__c | Version | string | oui |  |
| copado__Worker_Size__c | Worker Size | picklist | non |  |
| copado__Result_Viewer_Component__c | Result Viewer Component | string | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
## Quality Gate Rule — `copado__Quality_Gate_Rule__c`

Règle de quality gate utilisée par les Job Steps.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Quality Gate Rule Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__ActionsList__c | Copado Actions | string (formule) | oui |  |
| copado__Actions__c | Copado Actions | multipicklist | non |  |
| copado__Execution_sequence__c | Execution Sequence | picklist | non |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Tool__c | Tool | picklist | non |  |
| copado__Type__c | Type | string | oui |  |
| copado__dataJson__c | dataJson | textarea | oui |  |
| copado__Is_Updated_Data_Model__c | Is Updated Data Model | boolean | non |  |
## Quality Gate Rule Condition — `copado__Quality_Gate_Rule_Condition__c`

Conditions de règle selon pipeline, environnement, stage et extension.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Quality Gate Rule Condition Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| copado__Quality_Gate_Rule__c | Quality Gate Rule | Master-Detail | non | copado__Quality_Gate_Rule__c |
| copado__AcceptanceCriteria__c | Acceptance Criteria | textarea | oui |  |
| copado__Actions__c | Copado Actions | string (formule) | oui |  |
| copado__Environment__c | Environment | Lookup | oui | copado__Environment__c |
| copado__ExecutionSequence__c | Execution Sequence | string (formule) | oui |  |
| copado__Pipeline__c | Pipeline | Lookup | oui | copado__Deployment_Flow__c |
| copado__Platform__c | Platform | picklist | non |  |
| copado__Status__c | Status | string (formule) | oui |  |
| copado__Tool__c | Tool | string (formule) | oui |  |
| copado__Filter_Criteria__c | Filter Criteria | textarea | oui |  |
| copado__Extension_Configuration__c | Extension Configuration | Lookup | non | copado__ExtensionConfiguration__c |
| copado__Stage__c | Stage | Lookup | oui | copado__Stage__c |
| copado__Tests_From__c | Tests From | picklist | non |  |
## Test — `copado__Test__c`

Test attaché à une US ou une promotion, avec sa dernière exécution.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Application__c | Application | Lookup | oui | copado__Application__c (hors carte) |
| copado__Category__c | Category - Deprecated | string | oui |  |
| copado__Configuration__c | Configuration | textarea | oui |  |
| copado__Feature__c | Feature | Lookup | oui | copado__Application_Feature__c (hors carte) |
| copado__Priority__c | Priority | picklist | oui |  |
| copado__Reference__c | Reference | string | non |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Tool__c | Tool - Deprecated | string | oui |  |
| copado__User_Story__c | User Story | Lookup | oui | copado__User_Story__c |
| copado__Integration__c | Tool - Deprecated | Lookup | oui | copado__ExtensionConfiguration__c |
| copado__ExtensionConfiguration__c | Tool Configuration | Lookup | oui | copado__ExtensionConfiguration__c |
| copado__HasExtraConfiguration__c | Has Extra Configuration | boolean | non |  |
| copado__LatestJobExecution__c | Latest Job Execution | Lookup | oui | copado__JobExecution__c |
| copado__Type__c | Type | string (formule) | oui |  |
| copado__AcceptanceCriteria__c | Acceptance Criteria | textarea | oui |  |
| copado__ReadyToRun__c | Ready to Run | boolean | non |  |
| copado__Parent_Id__c | Parent Id | string | oui |  |
| copado__Promotion__c | Promotion | Lookup | oui | copado__Promotion__c |
| copado__Test_Tool__c | Test Tool | string (formule) | oui |  |
| copado__Parent__c | Parent | string (formule) | oui |  |
| copado__Latest_Result_Status__c | Latest Result Status | string (formule) | oui |  |
## Extension Configuration — `copado__ExtensionConfiguration__c`

Configuration d'une extension de test utilisée par Test et les conditions.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Details__c | Details | textarea | oui |  |
| copado__ExtensionApplication__c | Copado Phase | picklist | non |  |
| copado__Extension_Name__c | Extension Name - Deprecated | picklist | oui |  |
| copado__Status__c | Status - Deprecated | picklist | oui |  |
| copado__Type__c | Type - deprecated | picklist | oui |  |
| copado__Active__c | Active | boolean | non |  |
| copado__ExtensionTool__c | Extension Tool | picklist | non |  |
| copado__TestType__c | Test Type | string | oui |  |
| copado__AcceptanceCriteria__c | Acceptance Criteria | textarea | oui |  |
| copado__Backend_Bypass__c | Backend Bypass | boolean | non |  |
| copadoQuality__Latest_Job_Execution__c | Latest Job Execution | Lookup | oui | copado__JobExecution__c |
| copadoQuality__Requires_Sync__c | Requires Sync? | boolean | non |  |
## Automation Rule — `copado__Automation_Rule__c`

Règle d'automatisation associée au pipeline.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Automation Rule Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Pipeline__c | Pipeline | Master-Detail | non | copado__Deployment_Flow__c |
| copado__Active__c | Is Active | boolean | non |  |
| copado__Automated_Action_Callback__c | Flow or Class API Name | string | oui |  |
| copado__Automated_Action__c | Automated Action | string | oui |  |
| copado__Automation_Connector__c | Automation Type | string | oui |  |
| copado__Cron_Expression__c | Cron Expression | string | oui |  |
| copado__Custom_Automation_Connector__c | Custom Automation Type (API Name) | string | oui |  |
| copado__Description__c | Description | textarea | oui |  |
| copado__Environment__c | Selected Environments | string | oui |  |
| copado__Excluded_Environments__c | Excluded Environments | string | oui |  |
| copado__Execution__c | Execution Time | picklist | oui |  |
| copado__Last_Execution_Date_Time__c | Last Execution Date Time | datetime | oui |  |
| copado__Scheduled_Job_Id__c | Scheduled Job Id | string | oui |  |
| copado__Source_Action_Status__c | Trigger Action Status | picklist | oui |  |
| copado__Source_Action__c | Trigger Action | picklist | oui |  |
| copado__Stage__c | Selected Stages | string | oui |  |
| copado__Filter_Criteria__c | Filter Criteria | textarea | oui |  |
| copado__Config_Json__c | Config Json | textarea | oui |  |
| copado__Quality_Gate_Rule_Condition__c | Quality Gate Rule Condition | Lookup | oui | copado__Quality_Gate_Rule_Condition__c |
## Package — `copado__Artifact__c`

Package du modèle de développement par packages ; champs de l'extension cmcSf présents.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Package Name | string | oui |  |
| RecordTypeId | Record Type ID | Lookup | oui | RecordType (hors carte) |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| LastViewedDate | Last Viewed Date | datetime | oui |  |
| LastReferencedDate | Last Referenced Date | datetime | oui |  |
| copado__Artifact_Repository__c | Package Repository | Lookup | oui | copado__Git_Repository__c |
| copado__Artifact_Version__c | Latest Package Version | Lookup | oui | copado__Artifact_Version__c |
| copado__Description__c | Description | textarea | oui |  |
| copado__No_Namespace__c | No Namespace | boolean | non |  |
| copado__Org_Credential__c | Source Credential | Lookup | oui | copado__Org__c |
| copado__Package_Id__c | Package Id | string | oui |  |
| copado__Package_Namespace__c | Package Namespace | string | oui |  |
| copado__Package_Type__c | Package Type | picklist | oui |  |
| copado__Pipeline__c | Pipeline | Lookup | oui | copado__Deployment_Flow__c |
| copado__Sfdc_Login_Url__c | Sfdc Login Url | string | oui |  |
| copado__Source_Api_Version__c | Source Api Version | picklist | oui |  |
| copado__Target_Dev_Hub_Org__c | Target Dev Hub Org | Lookup | oui | copado__Org__c |
| copado__LastJobExecutionId__c | Last Job Execution Id | string | oui |  |
| copado__DataJSON__c | Data JSON | textarea | oui |  |
| copado__DefaultBranch__c | Default Branch | string | oui |  |
| copado__DefaultPath__c | Default Path | string | oui |  |
| cmcSf__Api_Version__c | Api Version | string | oui |  |
| cmcSf__IsOrgDependent__c | Is Org Dependent | boolean | non |  |
| cmcSf__PackagePath__c | Package Path | string | oui |  |
## Package Version — `copado__Artifact_Version__c`

Version de package rattachée à un package, une release et éventuellement une US.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Artifact Versions Name | string | oui |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| LastActivityDate | Last Activity Date | date | oui |  |
| copado__Artifact__c | Package | Master-Detail | non | copado__Artifact__c |
| copado__Branch__c | Branch | string | oui |  |
| copado__Is_released__c | Is released | boolean | non |  |
| copado__Package_Version_Id__c | Package Version Id | string | oui |  |
| copado__Production_Installation_URL__c | Production Installation URL | string (formule) | oui |  |
| copado__Release_Status__c | Release Status | string (formule) | oui |  |
| copado__Release__c | Release | Lookup | oui | copado__Release__c |
| copado__Sandbox_Installation_URL__c | Sandbox Installation URL | string (formule) | oui |  |
| copado__Status__c | Status | picklist | oui |  |
| copado__Subscriber_Version_Id__c | Subscriber Version Id | string | oui |  |
| copado__Tag__c | Tag | string | oui |  |
| copado__User_Story__c | Bundle User Story | Lookup | oui | copado__User_Story__c |
| copado__Version_Description__c | Version Description | string | oui |  |
| copado__Version_Name__c | Version Name | string | oui |  |
| copado__Version__c | Version | string (formule) | oui |  |
| copado__Version_number__c | Version number | string | oui |  |
| copado__View_In_Git__c | View In Git | string (formule) | oui |  |
| copado__Data_JSON__c | Data JSON | textarea | oui |  |
| copado__LastJobExecutionId__c | Last Job Execution Id | string | oui |  |
| copado__DefinitionFile__c | Definition File | string | oui |  |
| cmcSf__Ancestor_Id__c | Ancestor Id | string | oui |  |
| cmcSf__Ancestor_Version__c | Ancestor Version | string | oui |  |
| cmcSf__Api_Version__c | Api Version | string | oui |  |
| cmcSf__Code_Coverage__c | Code Coverage | boolean | non |  |
| cmcSf__Has_Installation_Key__c | Has Installation Key | boolean | non |  |
| cmcSf__Post_Install_Script__c | Post Install Script | string | oui |  |
| cmcSf__Post_Install_URL__c | Post Install URL | string | oui |  |
| cmcSf__Release_Notes_URL__c | Release Notes URL | string | oui |  |
| cmcSf__Skip_Validation__c | Skip Validation | boolean | non |  |
| cmcSf__Uninstall_Script__c | Uninstall Script | string | oui |  |
## Package Dependency — `copado__Artifact_Dependency__c`

Dépendance entre versions de packages.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Artifact Dependencies Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__Dependent_Artifact__c | Dependent Package | Master-Detail | non | copado__Artifact__c |
| copado__Depending_Artifact_Version__c | Depending Package Version | Lookup | oui | copado__Artifact_Version__c |
| copado__Depending_Artifact__c | Depending Package | Lookup | oui | copado__Artifact__c |
| copado__Depends_on_the_latest_version__c | Depends on the latest version | boolean | non |  |
## Installed Package Version — `copado__Installed_Artifact_Version__c`

Version de package installée dans un environnement.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| IsDeleted | Deleted | boolean | non |  |
| Name | Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__Package_Version__c | Package Version | Master-Detail | non | copado__Artifact_Version__c |
| copado__Environment__c | Environment | Master-Detail | non | copado__Environment__c |
| copado__Status__c | Status | picklist | oui |  |
## Bundled Story — `copado__Bundled_Story__c`

Jonction US–version de package ; distincte des anciens objets User Story Bundle.

| Champ | Libellé | Type | Null autorisé | Référence |
|---|---|---|---|---|
| Id | Record ID | id | non |  |
| OwnerId | Owner ID | Lookup | non | Group (hors carte), User (hors carte) |
| IsDeleted | Deleted | boolean | non |  |
| Name | Bundled Story Name | string | non |  |
| CreatedDate | Created Date | datetime | non |  |
| CreatedById | Created By ID | Lookup | non | User (hors carte) |
| LastModifiedDate | Last Modified Date | datetime | non |  |
| LastModifiedById | Last Modified By ID | Lookup | non | User (hors carte) |
| SystemModstamp | System Modstamp | datetime | non |  |
| copado__Package_Version__c | Package Version | Lookup | oui | copado__Artifact_Version__c |
| copado__User_Story__c | User Story | Lookup | oui | copado__User_Story__c |
