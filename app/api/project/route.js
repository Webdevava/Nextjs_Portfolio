import { connectMongoDB } from '@/utils/db';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectMongoDB();
        const projects = await Project.find();
        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.error({ message: 'Failed to fetch projects' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { title, desc, image, service, date, url, repo } = await request.json();
        await connectMongoDB();
        await Project.create({ title, desc, image, service, date, url, repo });
        return NextResponse.json({ message: 'Project Created' }, { status: 201 });
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.error({ message: 'Failed to create project' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        await connectMongoDB();
        await Project.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting project:', error);
        return NextResponse.error({ message: 'Failed to delete project' }, { status: 500 });
    }
}
