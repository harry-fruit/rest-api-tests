-- CreateTable
CREATE TABLE "SysEntity" (
    "id" SERIAL NOT NULL,
    "unique_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SysEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SysCategory" (
    "id" SERIAL NOT NULL,
    "unique_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idSysEntity" INTEGER NOT NULL,

    CONSTRAINT "SysCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SysStatus" (
    "id" SERIAL NOT NULL,
    "unique_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idSysEntity" INTEGER NOT NULL,

    CONSTRAINT "SysStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SysTypes" (
    "id" SERIAL NOT NULL,
    "unique_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idSysEntity" INTEGER NOT NULL,

    CONSTRAINT "SysTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "unique_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "shipping" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_OrderToSysStatus" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SysEntity_unique_code_key" ON "SysEntity"("unique_code");

-- CreateIndex
CREATE UNIQUE INDEX "SysCategory_unique_code_key" ON "SysCategory"("unique_code");

-- CreateIndex
CREATE UNIQUE INDEX "SysStatus_unique_code_key" ON "SysStatus"("unique_code");

-- CreateIndex
CREATE UNIQUE INDEX "SysTypes_unique_code_key" ON "SysTypes"("unique_code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Item_unique_code_key" ON "Item"("unique_code");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToOrder_AB_unique" ON "_ItemToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToOrder_B_index" ON "_ItemToOrder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToSysStatus_AB_unique" ON "_OrderToSysStatus"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToSysStatus_B_index" ON "_OrderToSysStatus"("B");

-- AddForeignKey
ALTER TABLE "SysCategory" ADD CONSTRAINT "SysCategory_idSysEntity_fkey" FOREIGN KEY ("idSysEntity") REFERENCES "SysEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SysStatus" ADD CONSTRAINT "SysStatus_idSysEntity_fkey" FOREIGN KEY ("idSysEntity") REFERENCES "SysEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SysTypes" ADD CONSTRAINT "SysTypes_idSysEntity_fkey" FOREIGN KEY ("idSysEntity") REFERENCES "SysEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToOrder" ADD CONSTRAINT "_ItemToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToOrder" ADD CONSTRAINT "_ItemToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToSysStatus" ADD CONSTRAINT "_OrderToSysStatus_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToSysStatus" ADD CONSTRAINT "_OrderToSysStatus_B_fkey" FOREIGN KEY ("B") REFERENCES "SysStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
