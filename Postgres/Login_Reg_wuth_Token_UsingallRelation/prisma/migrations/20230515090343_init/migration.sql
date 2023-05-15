-- CreateTable
CREATE TABLE "EmpAuthData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "emptype" TEXT NOT NULL,
    "managerid" INTEGER NOT NULL,

    CONSTRAINT "EmpAuthData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HRList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hrtype" TEXT NOT NULL,
    "empid" INTEGER NOT NULL,

    CONSTRAINT "HRList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagerList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "managerrole" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,

    CONSTRAINT "ManagerList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeniorEmpList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "senioremprole" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,

    CONSTRAINT "SeniorEmpList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ManagerListToSeniorEmpList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmpAuthData_email_key" ON "EmpAuthData"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HRList_email_key" ON "HRList"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HRList_empid_key" ON "HRList"("empid");

-- CreateIndex
CREATE UNIQUE INDEX "ManagerList_email_key" ON "ManagerList"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SeniorEmpList_email_key" ON "SeniorEmpList"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ManagerListToSeniorEmpList_AB_unique" ON "_ManagerListToSeniorEmpList"("A", "B");

-- CreateIndex
CREATE INDEX "_ManagerListToSeniorEmpList_B_index" ON "_ManagerListToSeniorEmpList"("B");

-- AddForeignKey
ALTER TABLE "EmpAuthData" ADD CONSTRAINT "EmpAuthData_managerid_fkey" FOREIGN KEY ("managerid") REFERENCES "ManagerList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HRList" ADD CONSTRAINT "HRList_empid_fkey" FOREIGN KEY ("empid") REFERENCES "EmpAuthData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManagerListToSeniorEmpList" ADD CONSTRAINT "_ManagerListToSeniorEmpList_A_fkey" FOREIGN KEY ("A") REFERENCES "ManagerList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManagerListToSeniorEmpList" ADD CONSTRAINT "_ManagerListToSeniorEmpList_B_fkey" FOREIGN KEY ("B") REFERENCES "SeniorEmpList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
